type TitleProps = {
  title: string;
};

export function Title({ title }: TitleProps) {
  return (
    <h3 className="border-b-2 border-sky-500 desktop:text-3xl mobile:text-xl desktop:pb-2 desktop:mb-4 mobile:mb-2">
      {title}
    </h3>
  );
}
