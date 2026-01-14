const About = () => {
  return (
    <section className="min-h-screen bg-gray-100 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>

        <p className="text-gray-700 mb-4 leading-relaxed">
          This project was created to help beginners understand how
          React works with TypeScript and Tailwind CSS in a real-world
          setup.
        </p>

        <p className="text-gray-700 leading-relaxed">
          The focus is on clean code, proper folder structure,
          reusable components, and modern UI styling.
        </p>
      </div>
    </section>
  );
};

export default About;
