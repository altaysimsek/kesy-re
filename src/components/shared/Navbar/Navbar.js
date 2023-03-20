import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="px-4 py-5 flex justify-between items-center">
      <div className="flex">
        <Link href="/">
          <Image alt="Kesy" width={108} height={41} src="/svgs/kesy-logo.svg"></Image>
        </Link>
        <nav className="mx-9 flex justify-center items-center gap-9 text-sm">
          <Link className="transition hover:opacity-100 opacity-60 text-white font-medium text-center" href="#features">
            Features
          </Link>
          <Link className="transition hover:opacity-100 opacity-60 text-white font-medium text-center" href="#contribute">
            Contribute
          </Link>
          <Link className="transition hover:opacity-100 opacity-60 text-white font-medium text-center" href="#about">
            About
          </Link>
        </nav>
      </div>
      <div className="flex justify-center items-center gap-9 text-sm">
        <Link className="transition hover:opacity-100 opacity-60 text-white font-medium" href="/login">
          Log in
        </Link>
        <Link className="py-2 px-4 bg-[#32D29A] font-medium rounded-lg" href="/register">
          Try for free <span>→</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;