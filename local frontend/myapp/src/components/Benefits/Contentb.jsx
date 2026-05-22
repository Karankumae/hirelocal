import Image from "next/image"
 
const Contentb = () => {
return (
    <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2 space-y-12 text-gray-700 dark:text-gray-300">
                <h1 className="text-gray-900 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl">
                    Don't wait for perfect time just hire a local freelancer
                </h1>
                <p>
                With a local freelancer by your side, you can focus on growing your business — while the rest is handled by skilled hands.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-center gap-x-4">
                        <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                        Web site Analysis
                    </li>
                    <li className="flex items-center gap-x-4">
                        <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                        Photography
                    </li>
                    <li className="flex items-center gap-x-4">
                        <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                        Content Optimization.
                    </li>
                    <li className="flex items-center gap-x-4">
                        <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                        Business Growth
                    </li>
                    <li className="flex items-center gap-x-4">
                        <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                        Free optimazation.
                    </li>
                </ul>
            </div>
            <div className="flex md:flex-1">
                <Image src="https://img.freepik.com/free-vector/business-deal_52683-6262.jpg?ga=GA1.1.1506709794.1726655237&semt=ais_country_boost&w=740" alt="working on housing" width={1300} height={900} className="w-full md:h-full object-cover rounded-lg" />
            </div>
        </div>
    </section>
)
}
export default Contentb
