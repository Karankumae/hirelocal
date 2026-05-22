import Image from "next/image";

const metrics = [
  {
    value: "10K+",
    title: "Local Projects Delivered",
    description: "Thousands of successful projects completed by local freelancers across various industries.",
  },
  {
    value: "98%",
    title: "Client Satisfaction",
    description: "Almost all clients are satisfied with the quality and professionalism of local freelancers.",
  },
  {
    value: "500+",
    title: "Verified Freelancers",
    description: "A wide pool of verified freelancers available to take on projects quickly and reliably.",
  },
  {
    value: "24/7",
    title: "Dedicated Support",
    description: "We offer round-the-clock support to ensure seamless collaboration between clients and freelancers.",
  },
];

const MetricsSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        <div className="space-y-6 max-w-xl">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">
            Why Choose Local Freelancers?
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            We're building a strong local freelance community that delivers high-quality work with great communication, cultural understanding, and affordable pricing.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-14 md:items-center">
          <div className="md:w-1/2 md:py-8 grid sm:grid-cols-2 gap-8 md:gap-6 lg:gap-10 text-center text-gray-700 dark:text-gray-300 children:space-y-3">
            {metrics.map((metric, idx) => (
              <div key={idx}>
                <span className="font-semibold text-xl text-sky-600 dark:text-sky-500">
                  {metric.value}
                </span>
                <h2 className="text-gray-800 dark:text-gray-200 font-medium">
                  {metric.title}
                </h2>
                <p>{metric.description}</p>
              </div>
            ))}
          </div>
          <Image
            src="https://img.freepik.com/free-vector/online-survey-results-analysis-pie-charts-infographics-analyzing-process-business-financial-reports-analytics-social-poll-answers-statistics-concept-illustration_335657-1720.jpg?ga=GA1.1.1506709794.1726655237&semt=ais_country_boost&w=740"
            height={1200}
            width={2300}
            alt="happy team work"
            className="w-full h-auto md:w-1/2 md:h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
