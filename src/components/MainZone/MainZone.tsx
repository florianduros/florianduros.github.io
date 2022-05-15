import { Education } from "./Education";
import { WorkExperience } from "./WorkExperience";

export function MainZone() {
  return (
    <div className="desktop:pt-2 desktop:pb-10 desktop:pr-10 desktop:pl-4 mobile:px-3 mobile:pb-4 mobile:pt-2 flex-auto desktop:rounded-br-lg mobile:rounded-b-lg print:shadow-none bg-white desktop:w-mainZone">
      <WorkExperience />
      <Education />
    </div>
  );
}
