import IIconProps from "../../models/models.ts";

export default function Close(props: IIconProps) {
  const { className, width = 1.5, alt } = props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={alt}
    >
      <path d="M6 18L18 6" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 18L6 6" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
