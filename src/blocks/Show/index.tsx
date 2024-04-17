import React from "react";

interface ShowProps {
  children: React.ReactNode;
  when: boolean;
}

export const Show = ({ children, when }: ShowProps) => {
  if (!when) return null;
  return <>{children}</>;
};
