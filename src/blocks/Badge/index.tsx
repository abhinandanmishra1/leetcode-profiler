import { GuardianBadge, KnightBadge } from "@leetcode/assets";
import { BadgeName } from "@leetcode/types";

interface BadgeProps {
  name: BadgeName;
}

export const Badge = ({ name }: BadgeProps) => {
  const badge = {
    Knight: KnightBadge,
    Guardian: GuardianBadge,
  };

  return (
    <>
      <img src={badge[name]} alt={name} className="w-10 h-10" />
    </>
  );
};
