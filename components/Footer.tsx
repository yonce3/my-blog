import Image from "next/image";
import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-blue-500 text-white">
      <div
        className="flex justify-center mx-6 items-center h-16 cursor-pointer"
        onClick={() => {
          window.location.href = "https://github.com/yonce3";
        }}
      >
        <Image
          src="/../public/github-mark.png"
          alt="picute of github"
          width={30}
          height={30}
        />
      </div>
      <span>&copy; taro</span>
    </footer>
  );
};

export default Footer;
