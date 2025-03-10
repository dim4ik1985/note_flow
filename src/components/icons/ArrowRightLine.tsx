import IIconProps from '../../models/models.ts';

export const ArrowRightLine = (props: IIconProps) => {
  const { className, width = 1.5, alt } = props;
  return (
    <svg
      width="19"
      height="2"
      viewBox="0 0 19 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={alt}
      className={className}
    >
      <path
        d="M1 1H17.83"
        strokeWidth={width}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
