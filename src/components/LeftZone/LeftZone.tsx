import { Description } from "./Description";
import { Hobbies } from "./Hobbies";
import { Personal } from "./Personal";

export function LeftZone() {
  return (
    <div className="desktop:pb-10 desktop:pr-4 mobile:px-3 mobile:pb-3 desktop:pl-10 desktop:pt-2 bg-neutral-700 text-white desktop:rounded-bl-lg desktop:w-leftZone mobile:drop-shadow-lg">
      <Description />
      <Personal />
      <Hobbies />
    </div>
  );
}
