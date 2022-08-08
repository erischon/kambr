import Link from "next/link";
import Contact from "./Contact.component";
import Location from "./Location.component";

const FooterItems = () => {
  return (
    <div className="grid md:grid-cols-12 mt-6 mb-6 gap-2">
      <div className="md:col-span-3 text-xs md:border-r-[1px] border-b-[1px] md:border-b-0 pb-4 border-gray-300 pt-2">
        <ul className="flex gap-2 justify-between sm:justify-around md:flex-col flex-wrap">
          <li>
            <Link href="/soon">A propos</Link>
          </li>
          <li>
            <Link href="/soon">Mentions légales</Link>
          </li>
          <li>
            <Link href="/soon">CGV</Link>
          </li>
        </ul>
      </div>

      <div className="md:col-span-3 text-xs md:border-r-[1px] border-b-[1px] md:border-b-0 pb-4 border-gray-300 pt-2">
        <Contact />
      </div>

      <div className="md:col-span-6 text-xs pt-2">
        <Location />
      </div>
    </div>
  );
};

export default FooterItems;
