export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Contact Me</h1>
        <p className="text-lg text-gray-600">
          I'd love to hear from you! Send me a message or reach out using the info below.
        </p>
      </header>

      {/* Contact Info */}
      <div className="mb-8 grid md:grid-cols-2 gap-6">
        <div className="p-4 border border-gray-300 rounded">
          <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
          <p className="text-gray-700 mb-2">Name: Nayem Ahmed</p>
          <p className="text-gray-700 mb-2">
            Email: <a href="mailto:nayemahmedz@proton.me" className="text-blue-500">nayemahmedz@proton.me</a>
          </p>
          <p className="text-gray-700 mb-2">
            Phone: <a href="tel:+8801620358892" className="text-blue-500">+880 1620 358892</a>
          </p>
          <p className="text-gray-700 mb-2">Role: Full-Stack Web Developer</p>
          <p className="text-gray-700">Location: Sylhet, Bangladesh</p>
        </div>

        {/* Contact Form */}
        <div className="p-4 border border-gray-300 rounded">
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea placeholder="Your Message" rows={5} className="textarea textarea-bordered w-full"></textarea>
            </div>
            <button type="button" className="btn btn-primary w-full">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
}