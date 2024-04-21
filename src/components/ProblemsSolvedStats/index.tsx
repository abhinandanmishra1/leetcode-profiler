import { CircularProgressBar } from "@leetcode/blocks";
import { LevelProblemsStats } from "./LevelProblemsStats";
import { useProblemsSolvedStats } from "@leetcode/hooks";

interface ProblemsSolvedStatsProps {
  username: string;
}
export const ProblemsSolvedStats = ({ username }: ProblemsSolvedStatsProps) => {
  const { data, isLoading, isError } = useProblemsSolvedStats(username);
  if(isLoading || !data) return <>Loading...</>;
  if(isError) return <>Error</>;

  return (
    <div className="w-full bg-dark-layer-1 p-4 shadow-dark-down-01 rounded-lg">
      <div className="px-[13px] text-xs font-medium text-dark-label-3">Solved Problems</div>
      <div className="flex gap-4">
        <div className="mt-6 mr-4 p-2">
          <CircularProgressBar
            indicatorColor="rgba(255, 161, 22, 1)"
            solvedProblems={data.All.solvedCount}
            totalProblems={data.All.totalCount}
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
                problemsSolved={data.Easy.solvedCount}
                totalProblems={data.Easy.totalCount}
                beats={data.Easy.percentage}
            />
            <LevelProblemsStats
                level="Medium"
                problemsSolved={data.Medium.solvedCount}
                totalProblems={data.Medium.totalCount}
                beats={data.Medium.percentage}
            />
            <LevelProblemsStats
                level="Hard"
                problemsSolved={data.Hard.solvedCount}
                totalProblems={data.Hard.totalCount}
                beats={data.Hard.percentage}
            />
        </div>
      </div>
    </div>
  );
};
