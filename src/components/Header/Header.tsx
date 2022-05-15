import { Photo } from "./Photo";
import { MdEmail, MdPhone, MdPrint } from "react-icons/md";

export function Header() {
  return (
    <div className="desktop:px-10 desktop:pt-10 desktop:pb-5 desktop:w-header mobile:p-3 relative bg-neutral-700 print:bg-white text-white print:text-black rounded-t-lg flex items-center">
      <Photo />
      <div className="ml-5">
        <h1 className="desktop:text-5xl mobile:text-xl mobile:font-bold mb-2">
          Florian Duros
        </h1>
        <h2 className="desktop:text-2xl">Software Engineer</h2>
        <div className="desktop:inline">
          <MdEmail className="inline" />
          <a
            className="text-sm p-2 underline"
            href="mailto:florian.duros@gmail.com"
          >
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
      <button
        className="absolute underline m-2 top-0 right-0 text-xs print:hidden"
        onClick={() => window.print()}
      >
        <MdPrint className="inline text-base mr-1" />
        Print
      </button>
    </div>
  );
}
