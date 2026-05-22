import Link from "next/link";
 
const iconRender = (val) => {
switch (val) {
    case "stat-ico":
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        )
    default:
        return <>No Icon</>;
}
}
 
const FeatureItem = ({ title, description, icon, id }) => {
return (
    <div className={
        ` space-y-4 
        ${id === 1 ? "sm:pr-4 pb-4"
            : id === 2 ? "pt-4 sm:pt-0 sm:pl-4 pb-4 sm:!border-t-transparent"
                : id === 3 ? "sm:pr-4 pt-4 sm:!border-l-transparent" : "sm:pl-4 pt-4"}
        `
    }>
        <span className="p-2 rounded-md bg-blue-50 text-blue-700 dark:bg-gray-900 dark:text-blue-500 flex w-max">
            {iconRender(icon)}
        </span>
        <h1 className="flex text-lg font-semibold capitalize text-gray-900 dark:text-white">
            {title}
        </h1>
        <p className="text-sm font-light text-gray-700 dark:text-gray-300">
            {description}
        </p>
        <Link href="#" className="text-sky-700 dark:text-sky-500 flex items-center gap-x-3 w-max">
            Try It 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
            </svg>
        </Link>
    </div>
)
}
const features = [
{
    id: 1,
    title: "Affordable Rates",
    description: "Local freelancers often charge less while delivering high-quality work",
    icon: "stat-ico"
},
{
    id: 2,
    title: "Better Communication",
    description: "Meet in person or have real-time discussions for seamless collaboration",
    icon: "stat-ico"
},
{
    id: 3,
    title: "Faster Turnaround",
    description: "No time zone issues, leading to quicker responses and project completion",
    icon: "stat-ico"
},
{
    id: 4,
    title: "Support Local Talent",
    description: "Boost your community’s economy by working with skilled professionals nearby",
    icon: "stat-ico"
},
]
 
const Features = () => {
return (
    <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="flex flex-col gap-5">
                <div className="space-y-4 max-w-xl">
                    <span className="rounded-lg bg-blue-50 dark:bg-gray-900 px-2.5 py-1 text-xs font-semibold tracking-wide text-sky-800 dark:text-gray-100">Feature</span>
                    <h1 className="text-3xl font-semibold text-blue-950 dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight">
                    Enjoy these exclusive benefits that distant freelancers simply can’t offer
                    </h1>
                </div>
            </div>
            <div className="mt-16 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10 xl:gap-14">
                <div className="lg:w-[55%] lg:items-center grid sm:grid-cols-2  sm:divide-x divide-y divide-gray-300 dark:divide-gray-800">
                    {
                        features.map(feature => (
                            <FeatureItem key={feature.id} {...feature} />
                        ))
                    }
                </div>
                <div className="flex-1 py-10 lg:py-8 space-y-8 max-w-2xl">
                    <h2 className="text-4xl font-semibold text-gray-900 dark:text-white">
                        Stay focus to your business strategy
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 max-w-md">
                    Your main focus should be growing your business—let a skilled local freelancer handle the rest!
                    </p>
                    <div className="flex">
                        <Link href="/SearchFreelancer" className="bg-sky-700 text-white rounded-full px-6 h-12 flex w-max items-center">
                            Search a Freelancer
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}
 
export default Features