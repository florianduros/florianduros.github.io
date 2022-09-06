import { Title } from "../Title";
import { Row } from "./Row";

type TechnologiesProps = {
  technologies: string;
};

function Technologies({ technologies }: TechnologiesProps) {
  return <p className="italic">Technologies: {technologies}</p>;
}

export function WorkExperience() {
  return (
    <div>
      <Title title="Work Experience" />
      <ul className="list-disc ml-4">
        <Row
          title={{
            date: "Jul. 2018 - Aug. 2022",
            location: "Software Engineer (Frontend), Klaxoon",
          }}
        >
          <p className="text-justify">
            Development of the web application Klaxoon.
          </p>
          <p className="text-justify">
            Focusing on the frontend architecture and the development of the
            frontend features of the main product (Klaxoon).
          </p>
          <Technologies technologies="React, TypeScript, Mobx, Mobx State Tree, Formik, Tachyons, Jest, Cypress, Backbone, Marionette, WebGL, Pixi, Webpack, Babel, NodeJs" />
        </Row>
        <Row
          title={{
            date: "Mar. 2015 - Jul. 2018",
            location: "Software Engineer, Hoppen",
          }}
          className="mt-6"
        >
          <p className="text-justify">
            Development of frontend and backend applications used in the
            healthcare area.
          </p>
          <p>Microservice architecture powered by docker.</p>
          <Technologies technologies="NodeJs, Redux, Polymer, Electron, Mongodb, Docker" />
        </Row>
        <Row
          title={{
            date: "Mar. 2014 - Aug. 2014",
            location: "Software Engineer Internship, Capptain",
          }}
          className="mt-6"
        >
          <p className="text-justify">
            My internship was to design and to create a real time computation
            application which was scalable and resilient to crashes.
          </p>
          <Technologies technologies="Storm/Trident, Apache HBase, Kafka, GWT, Scrum, Gradle" />
        </Row>
        <Row
          title={{
            date: "Jun. 2013 - Aug. 2013",
            location: "Software Engineer Internship, Tocea",
          }}
          className="mt-6"
        >
          <p className="text-justify">
            My role was to specify, to develop and to design an administration
            application for the Scertify™ SaaS product.
          </p>
          <p className="text-justify">
            Scertify allows users to realize audits on projects and applications
            in order to detect violations of programming rules.
          </p>
          <Technologies technologies="GWT, Hibernate, Maven, Spring, Tomcat, Liferay, Jenkins" />
        </Row>
      </ul>
    </div>
  );
}
