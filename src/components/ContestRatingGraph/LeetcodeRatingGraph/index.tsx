import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Show } from "@leetcode/blocks";
import { ContestRanking, UserContestRanking } from "@leetcode/types";
import { DefaultContestRating } from "./DefaultContestRating";
import { SelectedContestRating } from "./SelectedContestRating";
import { useHighChartOptions } from "@leetcode/hooks/useHighChartOptions";

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
  const { isHovered, currentHoveredIndex, options } = useHighChartOptions({
    userContestRankingHistory,
    startYear,
    currentYear,
  });
  
  const {
    contest,
    problemsSolved,
    totalProblems,
    trendDirection: ratingDirection,
    rating: contestRating,
    ranking
  } = userContestRankingHistory[currentHoveredIndex];

  return (
    <>
      <Show when={!isHovered}>
        <DefaultContestRating userContestDetails={userContestDetails} />
      </Show>

      <Show when={isHovered}>
        <SelectedContestRating
          contestDate={contest?.startTime || 0}
          contestName={contest?.title || ""}
          contestRating={contestRating}
          problemsSolved={problemsSolved}
          totalProblems={totalProblems}
          ratingDirection={ratingDirection}
          ranking={ranking}
        />
      </Show>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};
