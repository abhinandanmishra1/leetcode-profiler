import { useContestRatingGraph } from "@leetcode/hooks";

interface ContestRatingGraphProps {
  username: string;
}

export const ContestRatingGraph = ({ username }: ContestRatingGraphProps) => {
  const { data } = useContestRatingGraph(username);
  console.log(data);
  return <div>{data?.userContestRanking.globalRanking}</div>;
};
