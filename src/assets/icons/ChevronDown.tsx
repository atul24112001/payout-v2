import * as React from "react";

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill ?? "#fff"}
      d="M3.916 8.666a1.42 1.42 0 0 1 1.85-.137l.16.137L12.5 15.24l6.574-6.574a1.42 1.42 0 0 1 1.85-.137l.16.137c.504.505.55 1.294.137 1.85l-.137.16-7.58 7.579a1.42 1.42 0 0 1-1.85.137l-.159-.137-7.579-7.58a1.42 1.42 0 0 1 0-2.009"
    />
  </svg>
);
export default SvgComponent;
