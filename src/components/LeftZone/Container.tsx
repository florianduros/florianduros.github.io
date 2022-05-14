import { PropsWithChildren } from "react";

type ProfileProps = PropsWithChildren<{
  text: string;
  className?: string;
}>;

export function Container({ className, text, children }: ProfileProps) {
  return (
    <div className={className}>
      <h3 className="border-b-2 border-amber-600 desktop:text-3xl mobile:font-bold desktop:pb-2 desktop:mb-4 mobile:mb-2">
        {text}
      </h3>
      {children}
    </div>
  );
}
