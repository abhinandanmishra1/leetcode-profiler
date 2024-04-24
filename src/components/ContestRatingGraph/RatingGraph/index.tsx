import { ContestRanking, UserContestRanking } from "@leetcode/types";

import { DefaultContestRating } from "./DefaultContestRating";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { SelectedContestRating } from "./SelectedContestRating";
import { Show } from "@leetcode/blocks";
import { useHighChartOptions } from "@leetcode/hooks/useHighChartOptions";

interface ContestRatingGraphProps {
  userContestRankingHistory: ContestRanking[];
  startYear: number;
  currentYear: number;
  userContestDetails: UserContestRanking;
}

export const ContestRatingGraph = ({
  userContestRankingHistory,
  startYear,
  currentYear,
  userContestDetails,
}: ContestRatingGraphProps) => {
  const { isHovered, currentHoveredIndex, options } = useHighChartOptions({
    userContestRankingHistory,
    startYear,
    currentYear,
  });
  
  const {
    contest,
    problemsSolved,
    totalProblems,
    trendDirection: ratingDirection,
    rating: contestRating,
    ranking
  } = userContestRankingHistory[currentHoveredIndex] || {};

  return (
    <>
      <Show when={!isHovered}>
        <DefaultContestRating userContestDetails={userContestDetails} />
      </Show>

      <Show when={isHovered}>
        <SelectedContestRating
          contestDate={contest?.startTime || 0}
          contestName={contest?.title || ""}
          contestRating={contestRating}
          problemsSolved={problemsSolved}
          totalProblems={totalProblems}
          ratingDirection={ratingDirection}
          ranking={ranking}
        />
      </Show>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};
