import Image from "next/image";

const AroundCard = () => {
  return (
    <article className="flex w-full shadow-md sm:max-w-[300px] rounded-md">
      <div className="relative w-44 h-auto min-h-[170px] flex-1 min-w-[100px]">
        <Image
          src="https://images.unsplash.com/photo-1612829681252-1ce85bba55c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80"
          alt=""
          layout="fill"
          objectFit="cover"
          className="rounded-tl-md rounded-bl-md"
        />
      </div>

      <div className="flex flex-col gap-2 p-4">
        <h3 className="text-sm font-semibold">Le Mont Saint-Michel</h3>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex earum
          cupiditate aspernatur ad minus iste recusandae, vel saepe
          reprehenderit nihil blanditiis aut sed laudantium, corrupti maxime
          repellendus repudiandae, quas minima.
        </p>
      </div>
    </article>
  );
};

export default AroundCard;
