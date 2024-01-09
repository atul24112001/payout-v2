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
      d="m21.975 8.161-8.357-6.32a1.78 1.78 0 0 0-2.097 0l-8.515 6.33A1.73 1.73 0 0 0 2.3 9.572v11.16c-.004.353.1.7.298.993q.094.142.219.258a1.7 1.7 0 0 0 1.232.517h4.68a1.51 1.51 0 0 0 1.52-1.57l-.06-5.336a1.123 1.123 0 0 1 1.124-1.113h2.305a1.113 1.113 0 0 1 1.113 1.113v5.336a1.51 1.51 0 0 0 1.51 1.51h4.74a1.75 1.75 0 0 0 1.749-1.748V9.552a1.74 1.74 0 0 0-.755-1.39"
    />
  </svg>
);
export default SvgComponent;
