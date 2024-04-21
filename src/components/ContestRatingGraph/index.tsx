import { ContestRatingGraph } from "./RatingGraph";
import { useContestRatingGraph } from "@leetcode/hooks";

interface LeetcodeContestRatingGraph {
  username: string;
}

export const LeetcodeContestRatingGraph = ({ username }: LeetcodeContestRatingGraph) => {
  const { isLoading, isError, data } = useContestRatingGraph(username);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const startYear = new Date(data.userContestRankingHistory[0].contest.startTime*1000).getFullYear();
  
  return (
    <div className="w-full h-full bg-dark-layer-1 p-4 shadow-dark-down-01 rounded-lg mt-2 min-w-[250px]">
      <ContestRatingGraph
        userContestRankingHistory={data?.userContestRankingHistory}
        userContestDetails={data.userContestRanking}
        startYear={startYear}
        currentYear={new Date().getFullYear()}
      />
    </div>
  );
};
