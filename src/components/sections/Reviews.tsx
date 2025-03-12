import { reviews } from "../../utils/content.ts";

export const Reviews = () => {
  return (
    <section
      className={
        "m-auto flex max-w-[90rem] flex-wrap items-center gap-x-4 gap-y-4 px-24 max-xl:gap-x-3 max-xl:px-16"
      }
    >
      <ul className={"flex"}>
        {reviews.map((review) => (
          <li key={review.id} className={"-mr-4 last:mr-0"}>
            <img
              src={review.src.toString()}
              alt={review.alt}
              className={"border-primary-100 h-12 rounded-full border-2 max-xl:h-10"}
            />
          </li>
        ))}
      </ul>
      <p className={"text-primary-100 text-xl/loose font-light"}>
        Trusted by <span className={"text-primary-500 font-bold tracking-tight"}>12,653+</span>{" "}
        productivity junkies
      </p>
    </section>
  );
};
