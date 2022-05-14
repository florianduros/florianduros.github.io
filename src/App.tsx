import { Header } from "./components/Header";
import { LeftZone } from "./components/LeftZone/LeftZone";
import { MainZone } from "./components/MainZone";

export function App() {
  return (
    <div className="desktop:m-6 mobile:m-2 flex flex-col shadow-lg ">
      <Header />
      <div className="desktop:flex">
        <LeftZone />
        <MainZone />
      </div>
    </div>
  );
}
