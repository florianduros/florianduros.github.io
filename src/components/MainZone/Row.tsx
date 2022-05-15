import { PropsWithChildren } from "react";

type RowProps = PropsWithChildren<{
  title: {
    date: string;
    location: string;
  };
  className?: string;
}>;

export function Row({
  title: { date, location },
  className,
  children,
}: RowProps) {
  return (
    <li className={className}>
      <h2 className="font-bold">
        <span className="mobile:block desktop:inline-block desktop:w-48">
          {date}
        </span>
        {location}
      </h2>
      {children}
    </li>
  );
}
