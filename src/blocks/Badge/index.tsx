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
      <img src={badge[name]} alt={name} className="h-auto w-full min-w-[30px] max-w-[40px]" />
    </>
  );
};
