// Import the ITestimonial interface from the models file
import { ITestimonial } from "../../../models/models.ts";

// Import the motion library for animations
import { motion } from "motion/react";

// Import the Star component from the local icons directory
import { Star } from "../../icons/Star.tsx";

/**
 * Testimonial component that displays a single testimonial.
 *
 * @param {Object} props - The component props
 * @param {ITestimonial} props.test - The testimonial data
 * @returns {JSX.Element} The Testimonial component
 */

export const Testimonial = ({ test }: { test: ITestimonial }): JSX.Element => {
  // Destructure the testimonial data into individual variables
  const { rating, description, src, name, title } = test;

  // Generate an array of Star components based on the rating
  const stars = Array.from({ length: 5 }, (_, i) => (
    // Render a Star component for each rating point
    <Star
      key={i}
      alt="Filled Star Icon"
      // Conditionally apply a class based on the rating
      className={i < rating ? "fill-primary-100" : ""}
      // Conditionally set the width of the Star component
      width={i >= rating ? 2 : 1}
    />
  ));

  // Return the Testimonial component
  return (
    // Use the motion library to animate the component
    <motion.li
      // Set the initial and whileInView styles for the animation
      className={"bg-primary-1300 rounded-2xl px-8 py-10 max-xl:px-6 max-xl:py-8"}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      // Set the viewport and transition settings for the animation
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        opacity: {
          duration: 0.75,
          ease: "easeInOut"
        }
      }}
    >
      <div className={"flex gap-x-1 pb-8"}>{stars}</div>
      <p className={"text-primary-50 pb-16 text-lg/loose font-light max-xl:text-base/loose"}>
        {description}
      </p>
      <div className={"flex items-center gap-x-6 max-xl:gap-x-4"}>
        <img
          src={src.toString()}
          alt="Profile Picture"
          className={"h-18 rounded-full max-xl:h-14"}
        />
        <div>
          <p className={"text-primary-500 text-xl/7 font-bold tracking-tight max-xl:text-lg"}>
            {name}
          </p>
          <p className={"text-primary-75 text-base/loose tracking-tight max-xl:text-sm"}>{title}</p>
        </div>
      </div>
    </motion.li>
  );
};
