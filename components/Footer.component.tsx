import Link from "next/link";
import Contact from "./Contact.component";
import Location from "./Location.component";

const FooterItems = () => {
  return (
    <div className="grid md:grid-cols-12 mt-8 mb-2 gap-2">
      <div className="md:col-span-3 bg-gray-700 p-4 rounded-md text-xs">
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

      <div className="md:col-span-3 bg-gray-700 p-4 rounded-md text-xs">
        <Contact />
      </div>

      <div className="md:col-span-6 bg-gray-700 p-4 rounded-md text-xs">
        <Location />
      </div>
    </div>
  );
};

export default FooterItems;
