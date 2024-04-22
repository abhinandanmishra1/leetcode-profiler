import { BadgesResponse } from "@leetcode/types";
import { axios } from "@leetcode/services";

export const getBadges = async (username: string) => {
  const { data } = await axios.get<BadgesResponse>(
    `/${username}/badges`
  );

  return data;
};
