import { ReactNode } from "react";

export const Header = ({ children }: { children: ReactNode }) => {
  return <header className={"bg-gradient-to-bottom py-10"}>{children}</header>;
};
