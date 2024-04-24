import { CircularProgressBar, ProblemSolvedLoading, Show } from "@leetcode/blocks";

import { LevelProblemsStats } from "./LevelProblemsStats";
import { useSolvedProblemsStats } from "@leetcode/hooks";

interface LeetcodeSolvedProblemsStats {
  username: string;
}
export const LeetcodeSolvedProblemsStats = ({
  username,
}: LeetcodeSolvedProblemsStats) => {
  const { data, isLoading, isError } = useSolvedProblemsStats(username);
  if (isError) return <>Error</>;

  return (
    <div className="w-full bg-dark-layer-1 p-4 shadow-dark-down-01 rounded-lg">
      <Show when={!!data && !isLoading && !isError}>
        <div className="px-[13px] text-xs font-medium text-dark-label-3">
          Solved Problems
        </div>
        <div className="flex gap-4">
          <div className="mt-6 mr-4 p-2">
            <CircularProgressBar
              indicatorColor="rgba(255, 161, 22, 1)"
              solvedProblems={data?.All.solvedCount || 0}
              totalProblems={data?.All.totalCount || 0}
              trackWidth={4}
              indicatorWidth={5}
              label="Solved"
              labelColor="#fff"
              trackColor="hsla(0,0%,100%,.1)"
              size={100}
              changeProgressContent={() => {}}
            />
          </div>
          <div className="w-full space-y-4">
            <LevelProblemsStats
              level="Easy"
              problemsSolved={data?.Easy.solvedCount || 0}
              totalProblems={data?.Easy.totalCount || 0}
              beats={data?.Easy.percentage || 0}
            />
            <LevelProblemsStats
              level="Medium"
              problemsSolved={data?.Medium.solvedCount || 0}
              totalProblems={data?.Medium.totalCount || 0}
              beats={data?.Medium.percentage || 0}
            />
            <LevelProblemsStats
              level="Hard"
              problemsSolved={data?.Hard.solvedCount || 0}
              totalProblems={data?.Hard.totalCount || 0}
              beats={data?.Hard.percentage || 0}
            />
          </div>
        </div>
      </Show>
      <Show when={isLoading || !data}>
        <ProblemSolvedLoading />
      </Show>
    </div>
  );
};
