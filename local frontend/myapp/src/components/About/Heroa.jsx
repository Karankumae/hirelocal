"use client"
import Image from 'next/image'
import Link from 'next/link'

export default function Heroa() {
  return (
    <section className="py-8">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="mx-auto text-center max-w-xl">
          <h1 className="relative font-semibold max-w-max mx-auto pb-2 font-display text-3xl sm:text-4xl md:text-5xl text-gray-800 dark:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-lg after:bg-gray-800 dark:after:bg-gray-100 after:w-4">
            Hi, We Are Hire Local
          </h1>
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-14 gap-y-8 md:items-end">
          {/* Text Content */}
          <div className="space-y-4 md:space-y-6 md:col-span-2 lg:col-span-1 w-full max-w-3xl lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className="font-display font-semibold text-2xl md:text-3xl text-gray-900 dark:text-white">
              We Provide solutions for businesses to hire local people to do their work 
            </h1>
            <div className="text-gray-700 dark:text-gray-300 space-y-3 mx-auto max-w-2xl lg:max-w-none">
              <p>If anyone needs an electrician , plumber , web developer or anyone they can get their number in HireLocal platform</p>
              <p>So Let's focus on business and all the rest should be handled by local freelancers</p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Link href="/SearchFreelancer" className="px-6 h-11 flex items-center rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm transition ease-linear hover:bg-gray-800">
                Search the Freelancers right now
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 w-full">
              <div>
                <h2 className="text-xl md:text-2xl font-display font-semibold text-gray-800 dark:text-gray-200">3+ yrs</h2>
                <span className="text-gray-600">Experience</span>
              </div>
             
              <div>
                <h2 className="text-xl md:text-2xl font-display font-semibold text-gray-800 dark:text-gray-200">100%</h2>
                <span className="text-gray-600">Happy Clients</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="max-w-full relative">
              <span className="absolute inset-x-0 top-16 bottom-0 rounded-lg scale-[1.04] bg-gradient-to-b from-gray-200 dark:from-gray-900" />
              <span className="absolute inset-x-0 bottom-0 top-16 rounded-lg bg-gray-100 dark:bg-gray-900" />
              <Image
                src="https://img.freepik.com/free-vector/people-talking_53876-25461.jpg?ga=GA1.1.1506709794.1726655237&semt=ais_country_boost&w=740"
                width={1240}
                height={1876}
                alt="Freelancer working with laptop"
                className="relative w-full h-auto max-h-96 lg:max-h-[26rem]"
              />
            </div>
          </div>

          {/* Features / Highlights */}
          <div className="space-y-3 lg:space-y-6">
            {[
              {
                title: 'Custom Websites',
                description: 'Design and build tailored websites for small businesses and creators.',
              },
              {
                title: 'Photography',
                description: 'Get Professional Photographers for events',
              },
              {
                title: 'SEO & Performance',
                description: 'Optimized websites that rank better and load faster.',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-x-2 p-2 md:p-3 lg:p-4 bg-gray-50 dark:bg-gray-900 border border-gray-100/80 dark:border-gray-900/80 rounded-lg">
                <span className="min-w-max text-gray-600 p-2 md:p-3 rounded-lg bg-gray-200 dark:bg-gray-800 border border-gray-100/70 dark:border-gray-900/70 dark:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={24} height={24} className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold text-gray-800 dark:text-gray-200 text-lg">{item.title}</span>
                  <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
