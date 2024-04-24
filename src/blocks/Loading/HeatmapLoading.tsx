import ActivityCalendar from "react-activity-calendar";
import { daysInMonths } from "@leetcode/constants";
import { format } from "date-fns";
import { useMemo } from "react";

export const HeatmapLoading = () => {
  const yearlyActivities = useMemo(() => {
    const year = new Date().getFullYear();
    return Object.entries(daysInMonths).map(({ 0: _m, 1: days }) => {
      return [
        {
          date: format(new Date(year, Number(_m), 1), "yyyy-MM-dd"),
          count: 0,
          level: 0,
        },
        {
          date: format(new Date(year, Number(_m), days), "yyyy-MM-dd"),
          count: 0,
          level: 0,
        },
      ];
    });
  }, []);

  return (
    <div className="w-full flex flex-col gap-2rounded shadow animate-pulse border-[#ffffff14]">
      <div className="flex justify-between w-full">
        <div className="h-3.5 rounded-full bg-[#ffffff14] w-32"></div>
        <div className="flex gap-2 w-1/2 justify-end">
          <div className="w-24 h-3 bg-[#ffffff14] rounded-full"></div>
          <div className="w-24 h-3 bg-[#ffffff14] rounded-full"></div>
          <div className="w-16 h-3 bg-[#ffffff14] rounded-full"></div>
        </div>
      </div>
      <div className="flex gap-2">
        {yearlyActivities.map((monthlyActivities) => {
          return (
            <ActivityCalendar
              key={monthlyActivities[0].date}
              data={monthlyActivities}
              theme={{
                dark: ["#ffffff14", "#004d1b", "#008024", "#01b328", "#aff0b4"],
              }}
              colorScheme="dark"
              blockSize={8}
              blockMargin={4}
              hideMonthLabels={false}
              weekStart={0}
            />
          );
        })}
      </div>
    </div>
  );
};
