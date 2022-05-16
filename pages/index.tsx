import type { NextPage } from "next";
import Image from "next/image";
import BottomBar from "../components/common/Bottombar";
import Navbar from "../components/common/Navbar";
import AboutText from "../components/Landing Page/About Text";
import BackgroundHCPattern from "../public/assets/background-HC-pattern.png";

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="w-full fixed top-0 z-20">
        <Navbar />
      </div>
      <Image
        src={BackgroundHCPattern}
        alt="Ponte JK"
        className="absolute top-10 opacity-5 object-fill object-center z-10"
      />
      <div className="absolute mx-auto w-fit left-0 right-0 my-auto h-fit bottom-0 top-0 z-20">
        <AboutText />
      </div>
      <div className="w-full fixed bottom-0 z-20">
        <BottomBar />
      </div>
    </div>
  );
};

export default Home;
