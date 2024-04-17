import { useContestRatingGraph } from "@leetcode/hooks";
import { LeetCodeChart } from "./LeetcodeRatingGraph";

interface ContestRatingGraphProps {
  username: string;
}

export const ContestRatingGraph = ({ username }: ContestRatingGraphProps) => {
  const { isLoading, isError, data } = useContestRatingGraph(username);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const startYear = new Date(data.userContestRankingHistory[0].contest.startTime*1000).getFullYear();
  
  return (
    <div>
      <LeetCodeChart
        userContestRankingHistory={data?.userContestRankingHistory}
        userContestDetails={data.userContestRanking}
        startYear={startYear}
        currentYear={new Date().getFullYear()}
      />
    </div>
  );
};
