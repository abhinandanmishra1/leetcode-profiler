import { ProblemStatsResponse } from "@leetcode/types";
import { axios } from "@leetcode/services";

export const getSolvedProblemsStatsData = async (username: string) => {
  const { data } = await axios.get<ProblemStatsResponse>(
    `/${username}/solved`
  );

  return data;
};
