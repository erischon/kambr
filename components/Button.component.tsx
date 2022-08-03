import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Button = (props: any) => {
  let buttonClass =
    "py-2 px-5 bg-amber-500 rounded-lg items-center gap-1 cursor-pointer inline-flex";
  let iconClass = "text-lg pt-1";

  if (props.size === "lg") {
    buttonClass =
      "py-4 px-8 bg-amber-500 rounded-lg items-center gap-2 cursor-pointer inline-flex text-lg";
    iconClass = "text-2xl pt-1";
  }

  return (
    <div className={buttonClass}>
      <span className="">{props.text}</span>
      <span className={iconClass}>
        <MdOutlineKeyboardArrowRight />
      </span>
    </div>
  );
};

export default Button;
