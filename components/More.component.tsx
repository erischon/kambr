import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const More = (props: any) => {
  return (
    <div className="flex justify-between items-center w-fit gap-2 mt-8">
      <button className="cursor-pointer">{props.text}</button>
      <span>
        <ArrowRightAltIcon />
      </span>
    </div>
  );
};

export default More;
