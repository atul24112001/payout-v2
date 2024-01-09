import { SVGProps } from "react";
const QuestionMark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <g fill="#4D4D4D" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <path d="M7.778 10.18a.778.778 0 1 1-1.555 0 .778.778 0 0 1 1.555 0ZM6.127 3.408a2.281 2.281 0 1 1 1.34 4.34v.1a.467.467 0 1 1-.933 0V7.33A.467.467 0 0 1 7 6.863a1.348 1.348 0 1 0-1.348-1.348.467.467 0 1 1-.933 0 2.281 2.281 0 0 1 1.408-2.107Z" />
      <path d="M7 1.634a5.367 5.367 0 1 0 0 10.733A5.367 5.367 0 0 0 7 1.634ZM.7 7a6.3 6.3 0 1 1 12.6 0A6.3 6.3 0 0 1 .7 7Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h14v14H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default QuestionMark;
