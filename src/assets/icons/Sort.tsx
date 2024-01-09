import * as React from "react";
import { SVGProps } from "react";
const SortIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#4D4D4D"
      fillRule="evenodd"
      d="M1.623 9.934a.533.533 0 0 1 .754 0l2.264 2.264 2.264-2.264a.533.533 0 0 1 .754.754l-2.64 2.64a.533.533 0 0 1-.755 0l-2.641-2.64a.533.533 0 0 1 0-.754Z"
      clipRule="evenodd"
    />
    <path
      fill="#4D4D4D"
      fillRule="evenodd"
      d="M4.641 2.515c.295 0 .533.239.533.533v9.904a.533.533 0 1 1-1.066 0V3.048c0-.294.238-.533.533-.533ZM14.377 6.066a.533.533 0 0 1-.754 0l-2.264-2.263-2.264 2.263a.533.533 0 1 1-.754-.754l2.641-2.64a.533.533 0 0 1 .754 0l2.641 2.64a.533.533 0 0 1 0 .754Z"
      clipRule="evenodd"
    />
    <path
      fill="#4D4D4D"
      fillRule="evenodd"
      d="M11.36 13.485a.533.533 0 0 1-.534-.533V3.048a.533.533 0 1 1 1.067 0v9.904a.533.533 0 0 1-.534.533Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SortIcon;
