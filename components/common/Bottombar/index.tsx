import {
  AuthorIntroduction,
  AuthorName,
  BottomBarMainTexts,
  BottomBarSubTexts,
} from "../../../constants/Bottombar";
import Logo from "../Icons/Logo";
import SeparatorBar from "../SeparatorBar.tsx";

const BottomBar = (): JSX.Element => {
  return (
    <div className="w-vw py-3 bg-base-grey border-t-4 border-base-blue">
      <div className="flex mx-auto w-fit">
        <div className="flex flex-col justify-center gap-y-3 items-end">
          <div className="flex gap-x-8 align-right">
            {BottomBarMainTexts.map((text) => {
              return (
                <span
                  key={text}
                  className="hover:text-base-blue cursor-pointer"
                >
                  {text}
                </span>
              );
            })}
          </div>
          <div className="flex gap-x-8 align-right">
            {BottomBarSubTexts.map((text) => {
              return (
                <span
                  key={text}
                  className="hover:text-base-blue cursor-pointer"
                >
                  {text}
                </span>
              );
            })}
          </div>
        </div>
        <SeparatorBar
          direction="vertical"
          color="blue"
          width={1}
          margin={8}
          length="20"
        />
        <div className="flex items-center gap-x-5">
          <Logo width={50} height={50} />
          <div className="h-fit">
            <span className="inline-block align-middle text-xs font-light">
              {AuthorIntroduction}
            </span>
            <SeparatorBar direction="horizontal" color="blue" width={1} />
            <span className="inline-block align-middle text-xl font-normal">
              {AuthorName}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;