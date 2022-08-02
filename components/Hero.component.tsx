import Image from "next/image";

const Hero = () => {
  const styles = {
    button:
      "inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800",
  };

  return (
    <section className="bg-[#e0ebed] lg:rounded-xl md:bg-hero-pattern bg-top bg-no-repeat bg-cover">
      <div className="grid max-w-screen-xl px-8 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:px-16 lg:grid-cols-12 relative">
        <div className="mr-auto place-self-center lg:col-span-7 z-10 ">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
            La halte des voyageurs exigeants
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
            perferendis quis? Quae impedit blanditiis facilis ex nemo,
            accusantium omnis dolorum nihil illo. Ad ipsam at minima
            molestiasexpedita. Laborum, magni?
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-7 py-3 text-lg font-semibold text-center  rounded-lg bg-amber-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
          >
            Réserver
          </a>
        </div>

        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex"></div>
      </div>
    </section>
  );
};

export default Hero;
