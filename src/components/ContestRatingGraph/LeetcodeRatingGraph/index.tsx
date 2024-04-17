import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Show } from "@leetcode/blocks";
import { useMemo, useState } from "react";
import {
  ContestRanking,
  HighChartMouseoverEvent,
  HighChartOptions,
  UserContestRanking,
} from "@leetcode/types";
import { DefaultContestRating } from "./DefaultContestRating";
import { SelectedContestRating } from "./SelectedContestRating";

interface LeetCodeChartProps {
  userContestRankingHistory: ContestRanking[];
  startYear: number;
  currentYear: number;
  userContestDetails: UserContestRanking;
}
export const LeetCodeChart = ({
  userContestRankingHistory,
  startYear,
  currentYear,
  userContestDetails,
}: LeetCodeChartProps) => {
  const badgeName = userContestDetails?.badge?.name;
  const [currentHoveredIndex, setCurrentHoveredIndex] = useState(
    userContestRankingHistory.length - 1
  );
  const [isHovered, setIsHovered] = useState(false);
  console.log(userContestRankingHistory[currentHoveredIndex]);
  const ratings = useMemo(() => {
    return (userContestRankingHistory || [])
      .filter((contest) => contest.attended)
      .map((contest) => Math.round(contest.rating));
  }, [userContestRankingHistory]);
  const {
    contest,
    problemsSolved,
    totalProblems,
    trendDirection: ratingDirection,
    rating: contestRating,
  } = userContestRankingHistory[currentHoveredIndex];
  const options : HighChartOptions = {
    title: {
      text: "",
    },
    chart: {
      backgroundColor: "rgb(38, 38, 38)",
      height: "200vh",
      marginLeft: 10,
      renderTo: "container",
    },
    accessibility: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: "",
        showInLegend: "",
        legendIndex: 0,
        marker: {
          enabled: false,
        },
        data: ratings,
        color: "rgb(255, 161, 22)",
      },
    ],
    xAxis: {
      title: {
        text: "",
      },
      tickInterval: 0,
      showFirstLabel: true,
      showLastLabel: true,
      lineColor: "none",
      tickColor: "none",
      minorGridLineColor: "none",
      labels: {
        formatter: function () {
          if (this.isFirst) return startYear;
          else if (this.isLast) return currentYear;
          else return "";
        },
        color: "white",
      },
    },
    yAxis: {
      tickInterval: 0,
      tickPixelInterval: 0,
      labels: {
        formatter: function () {
          return this.value + " %";
        },
      },
      title: "",
      accessibility: {
        enabled: false,
      },
      showFirstLabel: false,
      showLastLabel: true,
      gridLineColor: "none",
    },
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver: (event: HighChartMouseoverEvent) => {
              setCurrentHoveredIndex(event.target.index);
              setIsHovered(true);
            },
            mouseOut: () => {
              setIsHovered(false);
            },
          },
        },
      },
    },
    tooltip: {
      enabled: false,
    },
  };

  return (
    <>  
      <Show when={!isHovered}>
        <DefaultContestRating
          userContestDetails={userContestDetails}
          badgeName={badgeName}
        />
      </Show>{" "}
      <Show when={isHovered}>
        <SelectedContestRating
          contestDate={contest?.startTime || 0}
          contestName={contest?.title || ""}
          contestRating={contestRating}
          problemsSolved={problemsSolved}
          totalProblems={totalProblems}
          ratingDirection={ratingDirection}
        />
      </Show>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};
