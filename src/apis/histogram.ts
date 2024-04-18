import { axios } from "@leetcode/services";
import { TopRatingHistogramResponse } from "@leetcode/types";

export const getHistogramData = async (username: string) => {
  const { data } = await axios.get<{data: TopRatingHistogramResponse}>(
    `/${username}/histogram`
  );

  return data;
};
