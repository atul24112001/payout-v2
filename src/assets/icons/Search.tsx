import { SVGProps } from "react";
const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="gray"
        d="M6.8 12.03c-2.867 0-5.2-2.339-5.2-5.213s2.333-5.213 5.2-5.213S12 3.943 12 6.817 9.667 12.03 6.8 12.03Zm5.48-1.192a6.783 6.783 0 0 0 1.32-4.021C13.6 3.058 10.55 0 6.8 0S0 3.058 0 6.817c0 3.759 3.05 6.817 6.8 6.817a6.75 6.75 0 0 0 4.39-1.62l2.813 2.82a.797.797 0 0 0 1.131 0 .802.802 0 0 0 0-1.134l-2.855-2.862Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SearchIcon;
