import {
  ContestRanking,
  HighChartMouseoverEvent,
  HighChartOptions,
} from "@leetcode/types";
import { useMemo, useState } from "react";

interface useHighChartOptionsProps {
  userContestRankingHistory: ContestRanking[];
  startYear: number;
  currentYear: number;
}

export const useHighChartOptions = ({
  userContestRankingHistory,
  startYear,
  currentYear,
}: useHighChartOptionsProps) => {
  const [currentHoveredIndex, setCurrentHoveredIndex] = useState(
    userContestRankingHistory.length - 1
  );
  const [isHovered, setIsHovered] = useState(false);

  const ratings = useMemo(() => {
    return (userContestRankingHistory || [])
      .filter((contest) => contest.attended)
      .map((contest) => Math.round(contest.rating));
  }, [userContestRankingHistory]);

  const options = useMemo(() => {
    const chartOptions: HighChartOptions = {
      title: {
        text: "",
      },
      chart: {
        backgroundColor: "rgb(40 40 40 / 1)",
        height: "100vh",
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

    return chartOptions;
  }, [userContestRankingHistory, startYear, currentYear]);

  return {
    options,
    currentHoveredIndex,
    isHovered,
  };
};
