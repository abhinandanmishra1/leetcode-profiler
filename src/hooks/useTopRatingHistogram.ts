import { getHistogramData } from "@leetcode/apis";
import { useContestRatingGraph } from "./useContestRatingGraph";
import { useMemo } from "react";
import { useQuery } from "@leetcode/services";

type ColumnType = {
  y: number;
  color?: string;
};

export const useTopRatingHistogram = (username: string) => {
  const {
    data: contestRatings,
    isLoading: contestRatingGraphLoading,
    isError: contestRatingGraphError
  } = useContestRatingGraph(username);

  const { rating: userRating, topPercentage } = contestRatings?.userContestRanking || {
    rating: 0,
    topPercentage: 0,
  }
  const { data, isLoading: histogramDataLoading, isError: histogramDataError } = useQuery({
    queryKey: ["histogramData"],
    queryFn: async () => {
      const { data } = await getHistogramData(username);

      return data;
    },
    enabled: !!contestRatings
  });

  const { contestRatingHistogram } = data || {};
  const histogramData = useMemo(() => {
    return contestRatingHistogram?.map(({ userCount, ratingStart, ratingEnd }) => {
      const column: ColumnType = { y: userCount };
      
      if (userRating >= ratingStart && userRating < ratingEnd) {
        column.color = "rgb(255, 161, 22)";
      }
  
      return column;
    });
  }, [contestRatingHistogram, userRating]);

  return {
    histogramData,
    isLoading: contestRatingGraphLoading || histogramDataLoading,
    isError: contestRatingGraphError || histogramDataError,
    topPercentage,
    contestRatingData: contestRatingHistogram
  }
};
