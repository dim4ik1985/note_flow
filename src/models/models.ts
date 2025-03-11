import { FC } from "react";

export default interface IIconProps {
  className?: string;
  width?: number;
  alt?: string;
  activeQuestion?: boolean;
}

export interface IQuestion {
  id: number;
  alt: string;
  Icon: FC<IIconProps>;
  question: string;
  answer: string;
}

export interface IFaqListProps {
  category: string;
  questionsArr: IQuestion[];
  activeQuestion: number | null;
  handleQuestionClick: (id: number) => void;
}

export interface ITestimonial {
  id: number;
  rating: number;
  description: string;
  src: URL;
  name: string;
  title: string;
}

export interface ModalContextType {
  activeModal: string;
  setActiveModal: (modal: string) => void;
}
