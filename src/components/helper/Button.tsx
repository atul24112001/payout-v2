import { PropsWithChildren, ReactNode } from "react";

type Props = {
  onClick: () => void;
  addOnRight?: ReactNode;
  addOnLeft?: ReactNode;
};

export default function Button({
  onClick,
  children,
  addOnRight,
  addOnLeft,
}: PropsWithChildren<Props>) {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center gap-2 border-[1px] border-solid border-primary-border px-3 py-[6px] rounded-md"
    >
      {addOnLeft}
      <span className="text-[14px] text-secondary">{children}</span>
      {addOnRight}
    </button>
  );
}
