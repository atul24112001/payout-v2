import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <g
      fill={props.fill ?? "#fff"}
      fillRule="evenodd"
      clipRule="evenodd"
      opacity={0.8}
    >
      <path d="M3.695 13.125a.93.93 0 0 1 .93-.93h5.25a.93.93 0 0 1 0 1.86h-4.32v5.82a.93.93 0 0 1-1.86 0z" />
      <path d="M2.195 19.875a.93.93 0 0 1 .93-.93h18.75a.93.93 0 0 1 0 1.86H3.125a.93.93 0 0 1-.93-.93" />
      <path d="M8.945 8.625a.93.93 0 0 1 .93-.93h5.25a.93.93 0 0 1 0 1.86h-4.32v10.32a.93.93 0 0 1-1.86 0z" />
      <path d="M14.195 4.125a.93.93 0 0 1 .93-.93h5.25a.93.93 0 0 1 .93.93v15.75a.93.93 0 0 1-.93.93h-5.25a.93.93 0 0 1-.93-.93zm1.86.93v13.89h3.39V5.055z" />
    </g>
  </svg>
);
export default SvgComponent;
