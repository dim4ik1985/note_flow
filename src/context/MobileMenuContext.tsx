import { createContext, ReactNode, useState } from "react";
import { MobileMenuContextType } from "../models/models.ts";

const MobileMenuContext = createContext<MobileMenuContextType>({
  mobileMenuOpened: false,
  setMobileMenuOpened: () => {}
});

const MobileMenuContextProvider = ({ children }: { children: ReactNode }) => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  return (
    <MobileMenuContext.Provider value={{ mobileMenuOpened, setMobileMenuOpened }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export { MobileMenuContext, MobileMenuContextProvider };
