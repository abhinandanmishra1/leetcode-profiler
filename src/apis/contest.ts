import { axios } from "@leetcode/services";
import { ContestRankingResponse } from "@leetcode/types";

export const getContestRatingGraph = async (username: string) => {
  const { data } = await axios.get<ContestRankingResponse>(
    `/${username}/rating`
  );
  
  return data;
};
