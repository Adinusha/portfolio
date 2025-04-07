import Image from "next/image";
import Herosection from "./components/Herosection";
import Aboutme from "./components/Aboutme";

export default function Home() {
  return (
    <div data-theme="portfolio">
      <Herosection />
      <Aboutme />
    </div>
  );
}
