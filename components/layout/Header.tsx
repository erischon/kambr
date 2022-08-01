import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex px-2 justify-between items-center">
      <div className="flex justify-center items-center my-2 gap-2">
        <Image
          src="/images/kambr_logo.png"
          alt="Kambr"
          layout="fixed"
          width={30}
          height={30}
          className=""
        />
        <Link href="/">
          <a className="font-bold">Kambr</a>
        </Link>
      </div>
      <nav className="text-sm font-semibold">
        <ul className="flex">
          <li className="mr-2">
            <Link href="/">Accueil</Link>
          </li>
          <li className="mr-2">
            <Link href="/">Prestations</Link>
          </li>
          <li className="mr-2">
            <Link href="/">Autour</Link>
          </li>
          <li className="mr-2">
            <Link href="/">Trajet</Link>
          </li>
          <li className="mr-2">
            <Link href="/">Réserver</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
