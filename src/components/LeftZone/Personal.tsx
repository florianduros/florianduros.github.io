import { Container } from "./Container";

type TitleProps = {
  title: string;
};

function Title({ title }: TitleProps) {
  return <span className="inline-block font-bold w-24">{title}</span>;
}

export function Personal() {
  return (
    <Container text="Personal" className="desktop:mt-8 mobile:mt-2">
      <ul>
        <li>
          <Title title="Age" />
          30 y/o
        </li>
        <li>
          <Title title="Location" />
          Rennes, France
        </li>
        <li>
          <Title title="Languages" />
          French Native, English Fluent
        </li>
        <li>
          <Title title="Linkedin" />
          <a
            className="underline"
            href="https://www.linkedin.com/in/florian-duros-aaa04545/"
          >
            Florian Duros
          </a>
        </li>
      </ul>
    </Container>
  );
}
