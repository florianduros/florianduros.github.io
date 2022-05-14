import { Description } from "./Description";
import { Personal } from "./Personal";

export function LeftZone() {
  return (
    <div className="desktop:pb-10 mobile:px-3 mobile:pb-3 desktop:px-10 bg-neutral-700 text-white desktop:rounded-bl-lg desktop:w-leftZone">
      <Description />
      <Personal />
    </div>
  );
}
