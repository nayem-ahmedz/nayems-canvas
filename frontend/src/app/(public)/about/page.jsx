export default function About() {
  return (
    <section className="mt-10 p-6 bg-white rounded shadow containerr">
      <title>About | Nayem's Canvas</title>
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">About Us</h1>
        <p className="text-lg text-gray-600">
          Learn more about our mission, vision, and the team behind this project.
        </p>
      </header>

      {/* Description */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed">
          We are a team of passionate developers and designers dedicated to
          creating high-quality web applications that enhance user experience.
          Our goal is to simplify complex processes and provide value to our
          users through innovative solutions.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="mb-8 grid md:grid-cols-2 gap-6">
        <div className="p-4 border border-gray-300 rounded">
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-700">
            To build reliable, user-friendly, and scalable web applications that
            solve real-world problems and improve the lives of our users.
          </p>
        </div>
        <div className="p-4 border border-gray-300 rounded">
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-700">
            To become a leading tech team recognized for innovation, quality,
            and customer satisfaction in the web development community.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Example team member card */}
          <div className="p-4 border border-gray-300 rounded text-center">
            <img
              src="https://nayem-ahmed.vercel.app/media/nayem-ahmed2.webp"
              alt="Nayem Ahmed"
              className="w-24 h-24 mx-auto rounded-full mb-2"
            />
            <h3 className="font-bold">Nayem Ahmed</h3>
            <p className="text-gray-600 text-sm">Full-stack Developer</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </div>
    </section>
  );
}