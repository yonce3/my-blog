import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-blue-500 text-white">
      <div className="flex justify-center mx-6 items-center h-16">
        <img src="public/GitHub-Mark.png" />
      </div>
      <span>&copy; taro</span>
    </footer>
  );
};

export default Footer;
