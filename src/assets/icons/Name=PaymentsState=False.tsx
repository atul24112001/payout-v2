import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <g fill={props.fill ?? "#fff"} clipPath="url(#a)" opacity={0.8}>
      <path d="M17.63 14.13a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
      <path
        fillRule="evenodd"
        d="M19.612 3.803a1.5 1.5 0 0 1 .163.577V7.5h2.835a1.62 1.62 0 0 1 1.665 1.575V19.2a1.62 1.62 0 0 1-1.665 1.575H6.65A1.605 1.605 0 0 1 5 19.2v-2.925H2.15A1.5 1.5 0 0 1 .5 14.88V4.38A1.5 1.5 0 0 1 2.15 3h15.96a1.5 1.5 0 0 1 1.502.803M5.192 7.692A1.68 1.68 0 0 1 6.38 7.2H18.2V4.575H2.075V14.7H4.7V8.88c0-.446.177-.873.492-1.188M6.575 19.2H22.7V9.075H6.575z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5 0h24v24H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
