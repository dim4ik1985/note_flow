import { ReactNode } from "react";

export const Header = ({ children }: { children: ReactNode }) => {
  return (
    <header className={"bg-gradient-to-bottom py-10 max-xl:py-8 max-lg:pb-24"}>{children}</header>
  );
};
