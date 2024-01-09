import { SVGProps } from "react";
const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.793 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 1 1-1.414-1.414L14.086 12 8.793 6.707a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </svg>
);
export default ChevronRight;
