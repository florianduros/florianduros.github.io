import { PropsWithChildren } from "react";
import { Title } from "../Title";

type ProfileProps = PropsWithChildren<{
  text: string;
  className?: string;
}>;

export function Container({ className, text, children }: ProfileProps) {
  return (
    <div className={className}>
      <Title title={text} />
      {children}
    </div>
  );
}
