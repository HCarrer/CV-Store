import SeparatorBar from "../../common/SeparatorBar";
import { MainPage } from "../../../constants/About";

const AboutText = (): JSX.Element => {
  const { header, firstSection, secondSection, thirdSection } = MainPage;
  return (
    <div className="flex flex-col justify-center items-center h-fit w-[650px] mx-auto">
      <span className="text-5xl">{header}</span>
      <SeparatorBar className="bg-base-blue w-4/5 my-5 h-1" />
      <div className="px-20 flex flex-col items-center gap-y-3">
        <span className="text-center text-sm">{firstSection}</span>
        <span className="text-center text-sm">{secondSection}</span>
        <span className="text-center text-sm">{thirdSection}</span>
      </div>
    </div>
  );
};

export default AboutText;
