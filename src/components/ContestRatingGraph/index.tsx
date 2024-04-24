import { ContestRatingGraph } from "./RatingGraph";
import { RatingGraphLoading } from "@leetcode/blocks/Loading/RatingGraphLoading";
import { Show } from "@leetcode/blocks";
import { useContestRatingGraph } from "@leetcode/hooks";

interface LeetcodeContestRatingGraph {
  username: string;
}

export const LeetcodeContestRatingGraph = ({
  username,
}: LeetcodeContestRatingGraph) => {
  const { isLoading, isError, data } = useContestRatingGraph(username);

  if (isError) {
    return <div>Error</div>;
  }

  const startYear = new Date(
    (data?.userContestRankingHistory?.[0]?.contest?.startTime || new Date().getTime()) * 1000
  ).getFullYear();

  return (
    <div className="w-full h-full bg-dark-layer-1 p-4 shadow-dark-down-01 rounded-lg mt-2 min-w-[250px]">
      <Show when={!isLoading && !isError && !!data && data.userContestRankingHistory.length > 0}>
        <ContestRatingGraph
          userContestRankingHistory={data?.userContestRankingHistory || []}
          userContestDetails={data?.userContestRanking}
          startYear={startYear}
          currentYear={new Date().getFullYear()}
        />
      </Show>
      <Show when={!isLoading && !isError && !!data && data.userContestRankingHistory.length === 0}>
        <div className=" bg-dark-layer-1 text-dark-label-1 flex items-center h-full justify-center">
          User has not participated in any contest
        </div>
      </Show>
      <Show when={isLoading}>
        <RatingGraphLoading />
      </Show>
    </div>
  );
};
