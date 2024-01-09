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
      d="M19.695 6.866a2.8 2.8 0 0 1-.575-.438L17.139 7.45a.864.864 0 0 1-.793-1.537l1.984-1.022a2.806 2.806 0 1 1 1.366 1.975m.477-2.964a1.069 1.069 0 1 0 1.852 1.069 1.069 1.069 0 0 0-1.852-1.07M13.45 14.656c2.78 0 5 2.412 5.1 5.384l.005.213v1.16a.96.96 0 0 1-.857.951l-.105.006H2.057a.96.96 0 0 1-.955-.853l-.006-.104v-1.16c0-2.997 2.155-5.48 4.907-5.593l.197-.004zm-7.25 1.66c-1.817 0-3.349 1.63-3.44 3.738l-.004.199-.001.457h14.14v-.457c0-2.137-1.477-3.832-3.275-3.933l-.17-.005zM9.825 4.365c2.487 0 4.5 2.024 4.5 4.516s-2.013 4.515-4.5 4.515-4.499-2.024-4.499-4.515c0-2.492 2.012-4.516 4.5-4.516m0 1.66a2.85 2.85 0 0 0-2.84 2.856 2.85 2.85 0 0 0 2.84 2.855 2.85 2.85 0 0 0 2.84-2.855 2.85 2.85 0 0 0-2.84-2.856m7.383 3.532a.864.864 0 1 0-.935 1.454l1.877 1.206a2.808 2.808 0 0 0 2.714 3.523 2.806 2.806 0 1 0-1.779-4.977zm2.587 3.377a1.07 1.07 0 1 1 2.138 0 1.07 1.07 0 0 1-2.138 0"
      clipRule="evenodd"
      opacity={0.8}
    />
  </svg>
);
export default SvgComponent;
