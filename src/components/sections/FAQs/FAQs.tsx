import { useState } from "react";
import { frequentlyAskedQuestions } from "../../../utils/content";
import { FaqList } from "./FAQList.tsx";

export const FaQs = () => {
  const [category, setCategory] = useState("General");
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  // {}
  const categoryObj = frequentlyAskedQuestions.filter((obj) => obj.category === category)[0];

  const questionsArr = categoryObj.questions;

  const handleCategoryClick = (category: string) => {
    setActiveQuestion(null);
    setCategory(category);
  };
  const handleQuestionClick = (id: number) => {
    id === activeQuestion ? setActiveQuestion(null) : setActiveQuestion(id);
  };

  return (
    <section className={"bg-gradient-to-bottom justify-items-center"}>
      <div className={"w-full max-w-[90rem] py-32"}>
        <h2
          className={"text-primary-50 mb-8 text-center text-6xl/18 font-semibold tracking-tighter"}
        >
          Frequently Asked Questions
        </h2>
        <div className={"mb-8 text-xl/loose font-light"}>
          <p className={"text-primary-100 text-center"}>
            The most commonly asked questions about NoteFlow.
            <br />
            Have any other questions?{" "}
            <a className={"underline decoration-1 underline-offset-3"} href="#">
              Chat with our expert tech team
            </a>
          </p>
        </div>
        <ul className={"mb-16 flex flex-wrap justify-center gap-x-3 gap-y-4"}>
          {frequentlyAskedQuestions.map((obj) => (
            <li key={obj.id}>
              <button
                className={`border-primary-50 text-primary-50 transition-properties cursor-pointer rounded-full border-2 px-8 py-3.5 text-lg/8 ${obj.category === category && "bg-primary-400 text-primary-1300 border-primary-400 primary-glow"} ${obj.category !== category && "hover:bg-primary-50 hover:text-primary-1300"}`}
                onClick={() => handleCategoryClick(obj.category)}
              >
                {obj.category}
              </button>
            </li>
          ))}
        </ul>
        <FaqList
          category={category}
          questionsArr={questionsArr}
          activeQuestion={activeQuestion}
          handleQuestionClick={handleQuestionClick}
        />
      </div>
    </section>
  );
};
