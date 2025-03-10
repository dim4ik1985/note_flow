import { ReactNode } from 'react';

export const Header = ({ children }: { children: ReactNode }) => {
  return <div className={'bg-gradient-to-bottom py-10'}>{children}</div>;
};
