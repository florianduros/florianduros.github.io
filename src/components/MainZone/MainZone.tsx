import { Education } from "./Education";
import { WorkExperience } from "./WorkExperience";

export function MainZone() {
  return (
    <div className="desktop:pb-10 mobile:pb-4 desktop:pr-10 desktop:pl-4 mobile:px-3 desktop:pt-2 mobile:pt-2 flex-auto desktop:rounded-br-lg mobile:rounded-b-lg bg-white desktop:w-mainZone">
      <WorkExperience />
      <Education />
    </div>
  );
}
