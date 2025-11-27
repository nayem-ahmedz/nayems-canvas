'use client';

export default function Vision() {
  return (
    <section className="containerr max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">Our Vision</h1>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to our tech blogging platform! I, <strong>Nayem Ahmed</strong>, created this blog page to share knowledge, ideas, and tutorials about technology. Here, I can write insightful blogs about programming, web development, AI, and more.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Our vision is to build a collaborative space where anyone passionate about technology can create an account, write blogs, and share their knowledge with the community. Whether you’re a beginner or an expert, your contributions are valued.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        By allowing multiple users to share their insights, we hope to foster a community of learning, innovation, and discussion. Together, we can make tech knowledge accessible and engaging for everyone.
      </p>
      <div className="text-center mt-8">
        <button
          className="btn btn-primary"
          onClick={() => window.location.href = "/register"}
        >
          Join & Start Blogging
        </button>
      </div>
    </section>
  );
}