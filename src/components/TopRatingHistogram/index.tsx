import { RatingHistogram } from "./RatingHistogram";
import { useTopRatingHistogram } from "@leetcode/hooks";

interface LeetcodeTopRatingHistogramProps {
  username: string;
}
export const LeetcodeTopRatingHistogram = ({ username }: LeetcodeTopRatingHistogramProps) => {
  const {
    contestRatingData,
    isLoading,
    isError,
    histogramData,
    topPercentage,
  } = useTopRatingHistogram(username);

  if (isLoading || !histogramData) return <>Loading...</>;
  if (isError) return <>Error</>;

  return (
    <div className="w-full h-full bg-dark-layer-1 p-4 shadow-dark-down-01 rounded-lg mt-2">
      <RatingHistogram
        data={histogramData}
        topPercentage={topPercentage}
        ratingInfoData={contestRatingData || []}
      />
    </div>
  );
};
