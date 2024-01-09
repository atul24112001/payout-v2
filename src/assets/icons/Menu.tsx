import { SVGProps } from "react";
const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.572 12a.81.81 0 0 1 .81-.81h18.235a.81.81 0 1 1 0 1.62H3.382a.81.81 0 0 1-.81-.81ZM2.572 5.922a.81.81 0 0 1 .81-.81h18.235a.81.81 0 1 1 0 1.62H3.382a.81.81 0 0 1-.81-.81ZM2.572 18.078a.81.81 0 0 1 .81-.81h18.235a.81.81 0 1 1 0 1.62H3.382a.81.81 0 0 1-.81-.81Z"
      clipRule="evenodd"
    />
  </svg>
);
export default MenuIcon;
