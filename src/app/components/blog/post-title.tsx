import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-3xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none my-12 text-center md:text-left">
      {children}
    </h1>
  );
}