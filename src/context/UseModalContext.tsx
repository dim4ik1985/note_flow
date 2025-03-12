import { useContext } from "react";
import { ModalContext } from "./ModalContext";
import { MobileMenuContext } from "./MobileMenuContext.tsx";

const useModalContext = () => {
  return useContext(ModalContext);
};

const useMobileMenuContext = () => {
  return useContext(MobileMenuContext);
}; // TODO: Mobile

export { useModalContext, useMobileMenuContext };
