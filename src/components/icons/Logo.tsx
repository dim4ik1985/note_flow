import IIconProps from '../../models/models.ts';

export const Logo = (props: IIconProps) => {
  const { className, width = 1.5, alt } = props;

  return (
    <svg
      width="38"
      height="28"
      viewBox="0 0 38 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={alt}
    >
      <path
        d="M19.9938 3.5H30.0063"
        stroke="var(--color-primary-500)"
        strokeWidth={width}
        strokeLinecap="round"
      />
      <path
        d="M11.0005 10.5L34.9995 10.5"
        stroke="var(--color-primary-500)"
        strokeWidth={width}
        strokeLinecap="round"
      />
      <path
        d="M35.5 17.5L2.5 17.5"
        stroke="var(--color-primary-500)"
        strokeWidth={width}
        strokeLinecap="round"
      />
      <path
        d="M5.75 24.5H24.25"
        stroke="var(--color-primary-500)"
        strokeWidth={width}
        strokeLinecap="round"
      />
    </svg>
  );
};
