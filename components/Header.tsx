import Image from "next/image";
import TextBox from "./ui/TextBox";
import UserIcon from "./user/UserIcon";

export default function Header() {
  return (
    <div className="py-5 mx-44 my-2 rounded-full flex flex-row justify-start items-start bg-splink w-10/12">
      <Image
        width={50}
        height={50}
        alt="Splash S Logo"
        src="/assets/SplashLetter.svg"
        className="w-4 h-4 align-bottom object-contain"
      />
      <TextBox placeholder="Search Splash" className="w-64" />
      <UserIcon />
    </div>
  );
}
