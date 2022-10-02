import Link from "next/link";

const Header = (): JSX.Element => {
  return (
    <header className="bg-blue-500 text-white">
      <div className="flex justify-between mx-6 items-center h-16">
        <h1>HOME</h1>
        <div className="flex gap-x-5">
          <a href="">一覧</a>
          <Link href="/profile">
            <a>About Me</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
