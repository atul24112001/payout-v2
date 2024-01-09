import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill ?? "#fff"}
      fillRule="evenodd"
      d="M16.899 13.16c3.086 0 5.535 2.743 5.535 6.07v1.258a1.04 1.04 0 0 1-1.042 1.039H4.542A1.04 1.04 0 0 1 3.5 20.488V19.23c0-3.327 2.45-6.07 5.536-6.07zM12.966 2c2.697 0 4.88 2.195 4.88 4.897s-2.183 4.897-4.88 4.897-4.88-2.194-4.88-4.897C8.088 4.195 10.27 2 12.968 2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
