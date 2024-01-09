import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill={props.fill ?? "#fff"}
        fillRule="evenodd"
        d="M5 16.5H2.273C1.293 16.5.5 15.828.5 15V4.5c0-.828.794-1.5 1.773-1.5h15.954C19.207 3 20 3.672 20 4.5v3h2.727c.98 0 1.773.756 1.773 1.688v10.125c0 .931-.794 1.687-1.773 1.687H6.773C5.793 21 5 20.244 5 19.313zm1.5-9.3A1.8 1.8 0 0 0 4.7 9v5.7H2.3V4.8h15.9v2.4zm8.25 10.05a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
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
