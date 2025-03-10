import { IFaqListProps } from "../../../models/models.ts";
import { motion } from "motion/react";
import { useState } from "react";
import { Faq } from "./FAQ.tsx";

export const FaqList = (props: IFaqListProps) => {
  const { category, questionsArr, activeQuestion, handleQuestionClick } = props;
  const [inView, setInView] = useState(false);

  return (
    <motion.ul
      className={"m-auto flex max-w-[51.625rem] flex-col gap-y-14"}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      key={category}
      layout
      variants={{
        hidden: { opacity: 0 },
        visible: {
          transition: {
            staggerChildren: 0.25,
            ease: "easeIn"
          }
        }
      }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setInView(true)}
      onViewportLeave={() => setInView(false)}
      viewport={{ once: false, amount: 0.3 }}
    >
      {questionsArr.map((question) => (
        <Faq
          key={question.id}
          question={question}
          activeQuestion={activeQuestion}
          handleQuestionClick={handleQuestionClick}
        />
      ))}
    </motion.ul>
  );
};
