const Home = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Welcome to My React + TypeScript App
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          This project helps me learn React, TypeScript, and Tailwind CSS
          step by step by building real components.
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Home;
