import Image from "next/image";

const Featuresb = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="flex flex-col gap-5">
          <div className="space-y-4 max-w-xl">
            <span className="rounded-lg bg-blue-50 dark:bg-gray-900 px-2.5 py-1 text-xs font-semibold tracking-wide text-blue-700 dark:text-gray-100">
              Why Choose Local Freelancers
            </span>
            <h1 className="text-3xl font-semibold text-blue-950 dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight">
              Let Us Help You Grow Your Business with Local Talent
            </h1>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Hiring local freelancers means faster communication, better understanding of your needs, and full focus on what truly matters — your business.
          </p>
        </div>

        <div className="mt-16 flex flex-col md:flex-row gap-8 xl:gap-10">
          <div className="md:w-96 lg:w-[26rem] space-y-5 flex flex-col md:py-6">

            <div className="cursor-pointer relative p-3 before:rounded-md space-y-3 before:absolute before:transition-all before:ease-linear before:scale-x-105 before:scale-y-110 before:inset-0 before:bg-gray-100 dark:before:bg-gray-900">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white relative">
                Skilled & Verified Talent
              </h2>
              <p className="relative text-gray-700 dark:text-gray-300 text-sm">
                Work with experienced professionals from your own city who understand your industry and challenges.
              </p>
            </div>

            <div className="cursor-pointer relative p-3 before:rounded-md space-y-3 before:absolute before:transition-all hover:before:ease-linear hover:before:scale-x-105 before:scale-y-110 before:inset-0 hover:before:bg-gray-100 before:dark:hover:bg-gray-900">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white relative">
                Faster Turnaround
              </h2>
              <p className="relative text-gray-700 dark:text-gray-300 text-sm">
                Local freelancers are more reachable and responsive — saving you time with smooth coordination.
              </p>
            </div>

            <div className="cursor-pointer relative p-3 before:rounded-md space-y-3 before:absolute before:transition-all hover:before:ease-linear hover:before:scale-x-105 before:scale-y-110 before:inset-0 hover:before:bg-gray-100 before:dark:hover:bg-gray-900">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white relative">
                Cost-Effective Solutions
              </h2>
              <p className="relative text-gray-700 dark:text-gray-300 text-sm">
                Get high-quality work without breaking the bank — no extra fees or hidden charges.
              </p>
            </div>

            <div className="cursor-pointer relative p-3 before:rounded-md space-y-3 before:absolute before:transition-all hover:before:ease-linear hover:before:scale-x-105 before:scale-y-110 before:inset-0 hover:before:bg-gray-100 before:dark:hover:bg-gray-900">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white relative">
                Focus on What Matters
              </h2>
              <p className="relative text-gray-700 dark:text-gray-300 text-sm">
                Spend more time growing your business while your local freelancer handles the rest, professionally.
              </p>
            </div>
          </div>

          <div className="flex-1 md:h-auto">
            <div className="flex-1 relative p-6 rounded-lg aspect-[4/2.4] md:aspect-auto md:h-full overflow-hidden">
              <Image
                src="https://img.freepik.com/free-vector/illustration-business-people_53876-58974.jpg?ga=GA1.1.1506709794.1726655237&semt=ais_country_boost&w=740"
                alt="Freelancer working"
                width={1800}
                height={1200}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featuresb;
