import Contact from "./Contact.component";
import Location from "./Location.component";

const FooterItems = () => {
  return (
    <div className="grid grid-cols-3 my-8">
      <div>
        <h3>Nous</h3>
        <ul>
          <li>About</li>
          <li>...</li>
          <li>...</li>
        </ul>
      </div>

      <div>
        <Contact />
      </div>

      <div>
        <Location />
      </div>
    </div>
  );
};

export default FooterItems;
