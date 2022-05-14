import { Photo } from "./Photo";
import { MdEmail, MdPhone } from "react-icons/md";

export function Header() {
  return (
    <div className="desktop:p-10 mobile:p-3 bg-neutral-700 text-white rounded-t-lg flex items-center desktop:w-header">
      <Photo />
      <div className="ml-5">
        <h1 className="desktop:text-5xl mobile:text-xl mobile:font-bold mb-2">
          Florian Duros
        </h1>
        <h2 className="desktop:text-2xl">Software Engineer</h2>
        <div className="desktop:inline">
          <MdEmail className="inline" />
          <a className="text-sm p-2" href="mailto:florian.duros@gmail.com">
            florian.duros@gmail.com
          </a>
        </div>
        <div className="desktop:inline desktop:ml-3">
          <MdPhone className="inline" />
          <a className="text-sm pl-1" href="tel:+33 6 32 28 34 61">
            +33 6 32 28 34 61
          </a>
        </div>
      </div>
    </div>
  );
}
