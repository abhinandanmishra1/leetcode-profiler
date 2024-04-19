import { axios } from "@leetcode/services";
import { ProblemStatsResponse } from "@leetcode/types";

export const getProblemsSolvedStatsData = async (username: string) => {
  const { data } = await axios.get<ProblemStatsResponse>(
    `/${username}/solved`
  );

  return data;
};
