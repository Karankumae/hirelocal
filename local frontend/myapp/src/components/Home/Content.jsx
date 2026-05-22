import Image from "next/image"
import Link from "next/link"
 
const ContentSection = () => {
return (
    <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-10 flex flex-col md:flex-row gap-16 py-10 rounded-2xl bg-gray-100 dark:bg-gray-900">
            <div className="flex md:flex-1">
                <Image src="https://img.freepik.com/free-photo/diverse-colleague-men-shaking-hands-together_53876-30671.jpg?ga=GA1.1.1506709794.1726655237&semt=ais_country_boost&w=740" alt="working on housing" width={1300} height={900} className="w-full md:h-full object-cover rounded-lg" />
            </div>
            <div className="md:w-1/2 space-y-12 text-gray-700 dark:text-gray-300">
                <h1 className="text-gray-900 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl">
                Grow Your Business Faster with Local Freelancers – No Stress, Just Success!
                </h1>
                <p>
                Need help? Hire skilled local freelancers to get your work done quickly and easily. Save time, reduce costs, and focus on what you do best!
                </p>
                <ul className="space-y-4">
                    <li className="flex items-center gap-x-4">
                        <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                        Web Developement
                    </li>
                    <li className="flex items-center gap-x-4">
                        <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                        Photography
                    </li>
                    <li className="flex items-center gap-x-4">
                        <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                        Many More Services
                    </li>
                </ul>
                <div className="flex">
                    <Link href="/Contact" className="px-5 h-11 flex items-center bg-emerald-600 dark:bg-emerald-500 rounded-lg text-white">
                        Get In touch
                    </Link>
                </div>
            </div>
        </div>
    </section>
)
}
export default ContentSection