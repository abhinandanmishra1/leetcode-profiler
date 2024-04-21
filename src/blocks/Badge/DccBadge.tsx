import { Badge } from "@leetcode/types";

interface DccBadgeProps {
  badge: Badge;
  className?: string;
}

export const DccBadge = ({ badge, className }: DccBadgeProps) => {
  return (
    <img
      src={`https://leetcode.com${badge.icon}`}
      alt={badge.name}
      className={className}
    />
  );
};
