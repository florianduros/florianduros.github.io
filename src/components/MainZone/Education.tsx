import { Title } from "../Title";
import { Row } from "./Row";

export function Education() {
  return (
    <div className="desktop:mt-6 mobile:mt-4">
      <Title title="Education" />
      <ul className="list-disc ml-4">
        <Row
          title={{
            date: "2011 - 2015",
            job: "University of Rennes 1",
          }}
        >
          <p className="text-justify">
            Graduate Engineering School of Rennes (ESIR).
          </p>
        </Row>
        <Row
          title={{
            date: "2009 - 2011",
            job: "University of South Brittany",
          }}
          className="mt-6"
        >
          <p className="text-justify">
            Associate degree in software development.
          </p>
        </Row>
      </ul>
    </div>
  );
}
