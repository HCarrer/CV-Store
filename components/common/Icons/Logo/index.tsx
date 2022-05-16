import Image from "next/image";
import HCLogo from "../../../../public/assets/LogoHC.svg";

const Logo = ({
  width,
  height,
}: {
  width: number;
  height: number;
}): JSX.Element => {
  return <Image width={width} height={height} alt="HC Logo" src={HCLogo} />;
};

export default Logo;
