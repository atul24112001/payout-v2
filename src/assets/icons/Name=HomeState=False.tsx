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
      d="M20.828 22.5H16.18a1.595 1.595 0 0 1-1.595-1.585v-6.32h-4.213v6.32A1.595 1.595 0 0 1 8.778 22.5H4.13a1.83 1.83 0 0 1-1.83-1.831V9.594a1.83 1.83 0 0 1 .738-1.467l8.447-6.262a1.83 1.83 0 0 1 2.196 0l8.279 6.252a1.85 1.85 0 0 1 .69 1.477v11.075a1.82 1.82 0 0 1-1.822 1.831m-4.549-1.674h4.569a.16.16 0 0 0 .147-.157V9.594a.14.14 0 0 0-.059-.119l-8.299-6.25a.17.17 0 0 0-.187 0l-8.437 6.26a.17.17 0 0 0-.069.128V20.67a.16.16 0 0 0 .158.157H8.67v-6.399a1.516 1.516 0 0 1 1.506-1.506h4.578a1.516 1.516 0 0 1 1.525 1.506z"
      opacity={0.8}
    />
  </svg>
);
export default SvgComponent;
