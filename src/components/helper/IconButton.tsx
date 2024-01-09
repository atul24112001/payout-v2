import { PropsWithChildren } from "react";

type Props = {
  onClick: () => void;
};

export default function IconButton({
  onClick,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div
      className="cursor-pointer rounded-full flex justify-center items-center bg-third-background w-10 h-10"
      onClick={onClick}
    >
      {children}
    </div>
  );
}
