const services = [
  {
    title: "Web Development",
    description: "Modern websites using React and TypeScript.",
  },
  {
    title: "UI Design",
    description: "Clean and responsive user interfaces.",
  },
  {
    title: "API Integration",
    description: "Connecting frontend apps to real backend services.",
  },
];

const Services = () => {
  return (
    <section className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
