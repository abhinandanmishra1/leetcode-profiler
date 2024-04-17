import { Badge } from "@leetcode/blocks";
import { BadgeName, UserContestRanking } from "@leetcode/types";

interface DefaultContestRatingProps {
  userContestDetails: UserContestRanking;
  badgeName?: BadgeName;
}

export const DefaultContestRating = ({
  userContestDetails,
  badgeName,
}: DefaultContestRatingProps) => {
  const {
    attendedContestsCount,
    rating,
    globalRanking,
    topPercentage,
    totalParticipants,
  } = userContestDetails;

  return (
    <div className="flex">
      {" "}
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <div className="text-sm text-dark-label-3">Contest Rating</div>
          <div className="">{Math.round(rating)}</div>
        </div>
        {badgeName && (
          <div className="flex items-center">
            <Badge name={badgeName} />
            <div className="flex flex-col">
              <div className="">Level</div>
              <div className="">{badgeName}</div>
            </div>
          </div>
        )}
        <div className="">
          <div className="">Global Ranking</div>
          <div className="">
            {globalRanking}
            <span>/{totalParticipants}</span>
          </div>
        </div>
        <div className="">
          <div className="">Attended</div>
          <div className="">{attendedContestsCount}</div>
        </div>
      </div>
    </div>
  );
};
