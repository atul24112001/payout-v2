import * as React from "react";
import { SVGProps } from "react";
const ProductsActiveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M20.997 13a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h6ZM10 13a1.5 1.5 0 0 1 1.5 1.5v6A1.5 1.5 0 0 1 10 22H4a1.5 1.5 0 0 1-1.5-1.5v-6A1.5 1.5 0 0 1 4 13h6Zm0-11a1.5 1.5 0 0 1 1.5 1.5v6A1.5 1.5 0 0 1 10 11H4a1.5 1.5 0 0 1-1.5-1.5v-6A1.5 1.5 0 0 1 4 2h6Zm10.997 0a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h6Z"
      clipRule="evenodd"
    />
  </svg>
);
export default ProductsActiveIcon;
