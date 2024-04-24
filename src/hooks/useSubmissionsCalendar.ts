import {
  Activity,
  DccBadge,
  HeatmapBadge,
  Option,
  SubmissionCalendar,
} from "@leetcode/types";
import { getMonthName, useQuery } from "@leetcode/services";
import { useMemo, useState } from "react";

import { daysInMonths } from "@leetcode/constants";
import { format } from "date-fns";
import { getSubmissionsCalendar } from "@leetcode/apis";

export const useSubmissionsCalendar = (username: string, year?: string) => {
  return useQuery({
    queryKey: ["submissionsCalendar", username, year],
    queryFn: () => getSubmissionsCalendar(username, year),
    enabled: !!username,
  });
};

const getLevel = (count: number) => {
  if (count < 1) return 0;
  if (count < 3) return 1;
  if (count < 5) return 2;
  if (count < 8) return 3;

  return 4;
};

export const useGetSubmissionsCalendarData = (
  data: string,
  selectedYear: Option
) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDate = new Date().getDate();
  const [submissionsCount, setSubmissionsCount] = useState(0);
  const submissionCalendarData = useMemo(() => {
    const submissionCalendar: SubmissionCalendar = JSON.parse(data || "{}");
    let totalSubmissions = 0;
    const result: Activity[] = Object.keys(submissionCalendar).map((key) => {
      totalSubmissions += submissionCalendar[key];
      return {
        date: format(new Date(Number(key) * 1000), "yyyy-MM-dd"),
        count: submissionCalendar[key],
        level: getLevel(submissionCalendar[key]),
        key: Number(key),
        day: new Date(Number(key) * 1000).getDate(),
        month: new Date(Number(key) * 1000).getMonth(),
        year: new Date(Number(key) * 1000).getFullYear(),
        monthname: format(new Date(Number(key) * 1000), "MMM"),
      };
    });

    if (result.length === 0) {
      let month = currentMonth;
      let year = currentYear - 1;
      let firstDate = new Date().getDate();
      const monthsCount = currentDate !== daysInMonths[month] ? 13 : 12;
      for (let i = 1; i <= monthsCount; i++) {
        const lastDate =
          year === currentYear && month === currentMonth
            ? currentDate
            : daysInMonths[month];
        result.push({
          date: format(new Date(year, month, firstDate), "yyyy-MM-dd"),
          count: 0,
          level: 0,
          key: new Date(year, month, firstDate).getTime(),
          day: firstDate,
          month,
          year,
          monthname: getMonthName(month),
        });

        result.push({
          date: format(new Date(year, month, lastDate), "yyyy-MM-dd"),
          count: 0,
          level: 0,
          key: new Date(year, month, lastDate).getTime(),
          day: lastDate,
          month,
          year,
          monthname: getMonthName(month),
        });
        firstDate = 1;
        month = (month + 1) % 12;
        if (month === 0) year++;
      }
    }

    setSubmissionsCount(totalSubmissions);

    const MinMaxDayInMonth: Record<number, Record<number, Array<number>>> = {};

    const groupedResult: { [year: number]: { [month: number]: Activity[] } } =
      result.reduce((acc, activity) => {
        const { day, month, year } = activity;

        // If year is not present in acc, initialize it
        if (!acc[year]) {
          acc[year] = {};
        }

        // If month is not present in acc, initialize it
        if (!acc[year][month]) {
          acc[year][month] = [];
        }

        // If year is not present in MinMaxDayInMonth, initialize it
        MinMaxDayInMonth[year] = MinMaxDayInMonth[year] || {};

        // If month is not present in MinMaxDayInMonth, initialize it
        MinMaxDayInMonth[year][month] = MinMaxDayInMonth[year][month] || [
          32, 0,
        ];

        // Update MinMaxDayInMonth Start
        MinMaxDayInMonth[year][month][0] = Math.min(
          MinMaxDayInMonth[year][month][0],
          day
        );

        MinMaxDayInMonth[year][month][1] = Math.max(
          MinMaxDayInMonth[year][month][1],
          day
        );
        // Update MinMaxDayInMonth End

        // Add the activity to the corresponding month in corresponding year
        acc[year][month].push(activity);
        return acc;
      }, {} as { [year: number]: { [month: number]: Activity[] } });

    // Now since the data for each month starts from the first active days and ends at last active days
    // but in the UI we want the data to start from the first day of the month and ends at last day of the month
    // so we need to adjust the data
    Object.keys(groupedResult).forEach((_year: string) => {
      const year = Number(_year);
      const endMonth = year === currentYear ? currentMonth : 11;
      const startMonth =
        selectedYear.name === "Current" && year !== currentYear
          ? currentMonth
          : 0;

      // loop for each month and if minimum day is not expected day
      // then add an activity with 0 count for that year, month
      for (let month = startMonth; month <= endMonth; month++) {
        const Max_Days = daysInMonths[month];
        if (!MinMaxDayInMonth[year][month]) {
          // in case if there were no any activities in a particular month
          MinMaxDayInMonth[year][month] = [32, 0];
          groupedResult[year][month] = [];
        }

        const currentMinimumDate = MinMaxDayInMonth[year][month][0];
        const currentMaximumDate = MinMaxDayInMonth[year][month][1];
        let expectedMinimumDate = 1;
        let expectedMaximumDate = Max_Days;

        if (
          year !== currentYear &&
          month == currentMonth &&
          selectedYear.name === "Current"
        ) {
          expectedMinimumDate = new Date().getDate();
        }

        if (
          year === currentYear &&
          month === currentMonth &&
          selectedYear.name === "Current"
        ) {
          expectedMaximumDate = currentDate;
        }

        if (currentMinimumDate !== expectedMinimumDate) {
          groupedResult[year][month].unshift({
            date: format(
              new Date(year, month, expectedMinimumDate),
              "yyyy-MM-dd"
            ),
            count: 0,
            level: 0,
            key: 0,
            day: 1,
            month: month,
            year: year,
            monthname: getMonthName(month),
          });
        }

        if (
          (currentMaximumDate !== expectedMaximumDate &&
            year !== currentYear) ||
          month !== currentMonth
        ) {
          groupedResult[year][month].push({
            date: format(
              new Date(year, month, expectedMaximumDate),
              "yyyy-MM-dd"
            ),
            count: 0,
            level: 0,
            key: 0,
            day: expectedMaximumDate,
            month: month,
            year: year,
            monthname: getMonthName(month),
          });
        }
      }
    });

    return groupedResult;
  }, [data, setSubmissionsCount, selectedYear]);

  return {
    submissionCalendarData,
    submissionsCount,
    currentMonth,
    currentYear,
  };
};

export const useGetActiveYearsOptions = (activeYears: number[]) => {
  const currentYear = new Date().getFullYear();
  const activeYearsOptions = useMemo(() => {
    const activeYearsOptions: Option[] = (activeYears || [])
      .sort((a: number, b: number) => b - a)
      .map((year: number) => {
        if (year === currentYear)
          return { name: "Current", value: year.toString() };
        return {
          name: year.toString(),
          value: year.toString(),
        };
      });

    if (
      activeYearsOptions.length === 0 ||
      activeYearsOptions[0].name !== "Current"
    ) {
      activeYearsOptions.unshift({ name: "Current" });
    }
    return activeYearsOptions;
  }, [activeYears]);

  return activeYearsOptions;
};

export const useTimestampToDccBadge = (dccBadges: DccBadge[]) => {
  return useMemo(() => {
    return (dccBadges || []).reduce((acc, badge) => {
      const month = new Date(Number(badge.timestamp) * 1000).getMonth();
      acc[month] = badge.badge;
      return acc;
    }, {} as { [month: number]: HeatmapBadge });
  }, [dccBadges]);
};
