import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const More = (props: any) => {
  return (
    <div className="flex justify-between items-center w-fit gap-2 mt-8">
      <button className="cursor-pointer">{props.text}</button>
      <span className="text-xl pt-1">
        <HiOutlineArrowNarrowRight />
      </span>
    </div>
  );
};

export default More;
