import { axios } from "@leetcode/services";
import { ContestRankingResponse } from "@leetcode/types";

export const getContestRatingGraph = async (username: string) => {
  const { data } = await axios.get<ContestRankingResponse>(
    `/${username}/rating`
  );

  data.userContestRankingHistory = data.userContestRankingHistory.filter(
    (contest) => contest.attended
  )
  return data;
};
