import { createContext, useState, ReactNode } from "react";
import { ModalContextType } from "../models/models.ts";

const ModalContext = createContext<ModalContextType>({
  activeModal: "",
  setActiveModal: () => {}
});

const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeModal, setActiveModal] = useState("");

  return (
    <ModalContext.Provider value={{ activeModal, setActiveModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContextProvider, ModalContext };
