import { PropsWithChildren } from "react";

type RowProps = PropsWithChildren<{
  title: {
    date: string;
    job: string;
  };
  className?: string;
}>;

export function Row({ title: { date, job }, className, children }: RowProps) {
  return (
    <li className={className}>
      <h2 className="font-bold">
        <span className="mobile:block desktop:inline-block desktop:w-48">
          {date}
        </span>
        {job}
      </h2>
      {children}
    </li>
  );
}
