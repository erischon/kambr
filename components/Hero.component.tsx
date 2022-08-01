import Image from "next/image";

const Hero = () => {
  const styles = {
    button:
      "inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800",
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Une halte pour voyageurs exigeants
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
            perferendis quis? Quae impedit blanditiis facilis ex nemo,
            accusantium omnis dolorum nihil illo. Ad ipsam at minima
            molestiasexpedita. Laborum, magni?
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-lg font-semibold text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Réserver
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src="https://images.unsplash.com/photo-1559131463-f9386f12e2db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
            alt=""
            layout="fixed"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
