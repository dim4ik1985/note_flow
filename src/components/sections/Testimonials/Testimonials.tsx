// Import necessary dependencies
import { useState } from "react";
import { TestimonialsList } from "./TestimonialsList.tsx";
import { testimonials as test } from "../../../utils/content";
import CaretUp from "../../icons/CaretUp.tsx";

/**
 * Testimonials component that displays customer testimonials.
 *
 * @returns {JSX.Element} The Testimonials component.
 */

export const Testimonials = (): JSX.Element => {
  // Initialize state to track whether the testimonials are expanded or not
  const [expended, setExpanded] = useState(false);

  return (
    // Container section with gradient background
    <section className={"bg-gradient-to-top"}>
      <div className={"m-auto flex max-w-[90rem] flex-col items-center px-24 py-32"}>
        {/* Header section with title and description */}
        <div className={"mb-20 flex max-w-[51.625rem] flex-col items-center gap-y-6"}>
          <p
            className={
              "text-primary-1300 bg-primary-500 primary-glow w-min rounded-full px-4 py-2 text-base/8"
            }
          >
            Testimonials
          </p>
          <h2 className={"text-primary-50 text-center text-6xl/18 font-semibold tracking-tighter"}>
            What our AI-powered <br /> notetakers have to say
          </h2>
          <p className={"text-primary-100 px-28 text-center text-xl/loose font-light"}>
            NoteFlow has helped 1000&apos;s supercharge their productivity <br /> with cutting edge
            AI note taking tools
          </p>
        </div>

        {/* Testimonials list section */}
        <div className={"mb-20 grid grid-cols-3 gap-x-6"}>
          <TestimonialsList testimonials={test.slice(0, expended ? 5 : 2)} />
          <TestimonialsList testimonials={test.slice(5, expended ? 10 : 7)} />
          <TestimonialsList testimonials={test.slice(10, expended ? 15 : 12)} />
        </div>

        {/* Show more/less button */}
        <button
          className={
            "text-primary-50 border-primary-50 transition-properties hover:bg-primary-50 hover:text-primary-1300 group flex cursor-pointer items-center gap-x-3 rounded-full border-2 px-8 py-3.5 text-lg/8"
          }
          onClick={() => setExpanded((curr) => !curr)}
          type={"button"}
        >
          {expended ? "Show less" : "Show more"}
          <CaretUp
            className={`stroke-primary-50 group-hover:stroke-primary-1300 rotate-180 transition-all duration-300 ${expended && "rotate-360"}`}
            width={2}
            alt={"Caret up icon"}
          />
        </button>
      </div>
    </section>
  );
};
