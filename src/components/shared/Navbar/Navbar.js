import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="">
      <Link href="/">
        <Image alt="Kesy" width={108} height={41} src="/svgs/kesy-logo.svg"></Image>
      </Link>
    </nav>
  );
};

export default Navbar;