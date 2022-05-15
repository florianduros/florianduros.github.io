import { Description } from "./Description";
import { Hobbies } from "./Hobbies";
import { Personal } from "./Personal";

export function LeftZone() {
  return (
    <div className="desktop:pl-10 desktop:pt-2 desktop:pb-10 desktop:pr-4 desktop:w-leftZone mobile:px-3 mobile:pb-3 mobile:drop-shadow-lg  bg-zinc-700 print:bg-white text-white print:text-black desktop:rounded-bl-lg">
      <Description />
      <Personal />
      <Hobbies />
    </div>
  );
}
