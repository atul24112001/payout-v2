import { SVGProps } from "react";
const ChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#4D4D4D"
      fillRule="evenodd"
      d="M16.207 5.293a1 1 0 0 1 0 1.414L10.914 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default ChevronLeft;
