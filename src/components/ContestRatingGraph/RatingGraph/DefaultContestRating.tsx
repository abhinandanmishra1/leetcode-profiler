import { Badge } from "@leetcode/blocks";
import { UserContestRanking } from "@leetcode/types";

interface DefaultContestRatingProps {
  userContestDetails?: UserContestRanking;
}

export const DefaultContestRating = ({
  userContestDetails,
}: DefaultContestRatingProps) => {
  const {
    attendedContestsCount,
    rating,
    globalRanking,
    totalParticipants,
  } = userContestDetails || {};

  const badgeName = userContestDetails?.badge?.name || "";
  return (
    <div className="flex ">
      {" "}
      <div className="flex gap-4 items-start">
        <div className="flex flex-col">
          <div className="text-xs text-dark-label-3 font-medium">Contest Rating</div>
          <div className="text-dark-label-1 text-xl md:text-2xl">{Math.round(rating || 0).toLocaleString("en-US")}</div>
        </div>
        {badgeName && (
          <div className="flex items-center gap-1">
            <Badge name={badgeName} />
            <div className="flex flex-col">
              <div className="text-xs text-dark-label-3 font-medium">Level</div>
              <div className="text-sm leading-[22px] text-dark-blue-s">{badgeName}</div>
            </div>
          </div>
        )}
        <div className="text-xs">
          <div className="text-dark-label-3 font-medium">Global Ranking</div>
          <div className="text-dark-label-1 font-medium leading-[22px]">
            {globalRanking?.toLocaleString("en-US")}
            <span className="text-dark-label-4 font-medium">/{totalParticipants?.toLocaleString("en-US")}</span>
          </div>
        </div>
        <div className="hidden md:block text-xs">
          <div className="text-dark-label-3 font-medium">Attended</div>
          <div className="text-dark-label-1 font-medium leading-[22px]">{attendedContestsCount?.toLocaleString("en-US")}</div>
        </div>
      </div>
    </div>
  );
};
