import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const More = (props: any) => {
  const url = `/${props.url}`;

  return (
    <div className="flex justify-between items-center w-fit gap-2 mt-8">
      <Link href={url}>
        <a className="cursor-pointer">{props.text}</a>
      </Link>
      <span className="text-xl pt-1">
        <HiOutlineArrowNarrowRight />
      </span>
    </div>
  );
};

export default More;
