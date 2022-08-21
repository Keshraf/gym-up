import Image from "next/image";
import Profile from "../../public/images/Profile.png";

const Header = (props) => {
  return (
    <div className="flex flex-row justify-between items-center h-fit w-full mt-16">
      <div>
        <h1 className="font-prim text-5xl">{props.title}</h1>
        <h2 className="font-prim text-lg text-sec">{props.subtitle}</h2>
      </div>
      <div className="w-32 h-32 relative">
        <Image layout="fill" src={Profile} alt="profile" />
      </div>
    </div>
  );
};

export default Header;
