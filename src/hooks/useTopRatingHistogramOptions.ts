import { TopRatingHistogramOptions } from "@leetcode/types";
import { useState } from "react";

interface UseTopRatingHistogramProps {
  data: any[];
}

export const useTopRatingHistogramOptions = ({
  data,
}: UseTopRatingHistogramProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const histogramOptions: TopRatingHistogramOptions = {
    chart: {
      renderTo: "container",
      type: "column",
      backgroundColor: "rgb(40, 40, 40, 1)",
      height: 200,
    },
    xAxis: {
      categories: [],
      labels: {
        enabled: false,
      },
      lineColor: "none",
    },
    yAxis: {
      min: 10,
      title: {
        enabled: false,
      },
      gridLineColor: "none",
      labels: {
        enabled: false,
      },
    },
    tooltip: {
      headerFormat: "",
      pointFormat: "",
      enabled: false,
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    legend: {
      enabled: false,
    },
    minPointLength: 1,
    plotOptions: {
      series: {
        pointPadding: 0.07,
        groupPadding: 0.04,
      },
      threshold: 1,
    },
    series: [
      {
        data,
        color: "hsla(0,0%,100%,.1)",
        borderColor: "rgb(38, 38, 38)",
        borderRadius: 3,
        minHeight: 11,
        depth: 300,
        states: {
          hover: {
            color: "rgb(255, 161, 22)",
            animation: {
              duration: 2500,
            },
          },
        },
        point: {
          events: {
            mouseOver: function (event) {
              if (event && event.target) {
                setCurrentIndex(event.target.index);
                setIsHovered(true);
              }
            },
            mouseOut: function (event) {
              if (event && event.target) {
                setIsHovered(false);
              }
            },
          },
        },
        threshold: 1,
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return {
    options: histogramOptions,
    currentIndex,
    isHovered
  };
};
