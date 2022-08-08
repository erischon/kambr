import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillFacebook } from "react-icons/ai";

import { FaBeer } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex justify-between sm:justify-around gap-2 md:flex-col flex-wrap ml-2">
      <p className="flex items-center gap-1">
        <BsFillTelephoneFill />: 06-34-54-73-23
      </p>
      <p className="flex items-center gap-1">
        <MdEmail />: kambr@gmail.com
      </p>
      <p className="flex items-center gap-1">
        <AiFillFacebook />: kambr
      </p>
    </div>
  );
};

export default Contact;
