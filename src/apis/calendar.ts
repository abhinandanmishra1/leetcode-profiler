import { SubmissionCalendarResponse } from "@leetcode/types";
import { axios } from "@leetcode/services";

export const getSubmissionsCalendar = async (username: string, year?: string) => {
  const { data } = await axios.get<SubmissionCalendarResponse>(
    `/${username}/calendar`, {
      params: {
        year
      }
    }
  );

  return data;
};
