// Import the ITestimonial interface from the models file
import { ITestimonial } from "../../../models/models.ts";

// Import the Testimonial component from the local Testimonial file
import { Testimonial } from "./Testimonial.tsx";

/**
 * TestimonialsList component that displays a list of testimonials.
 *
 * @param {Object} props - The component props
 * @param {ITestimonial[]} props.testimonials - An array of ITestimonial objects
 * @returns {JSX.Element} The TestimonialsList component
 */

export const TestimonialsList = ({
  testimonials
}: {
  testimonials: ITestimonial[];
}): JSX.Element => {
  // Return an unordered list with a flex column layout and gap between items
  return (
    <ul
      className={"flex flex-col gap-y-6 max-xl:gap-y-4 max-lg:nth-[3]:hidden max-sm:nth-[2]:hidden"}
    >
      {/* Map over the testimonials array and render a Testimonial component for each item */}
      {testimonials.map((test) => (
        <Testimonial key={test.id} test={test} />
      ))}
    </ul>
  );
};
