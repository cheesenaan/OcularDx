// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4 md:py-4 sm:py-2 shadow-md">
        <nav className="container mx-auto flex justify-between items-center px-4 flex-wrap">
          <h1 className="text-2xl font-bold">OcularDx</h1>

          {/* Navigation Links */}
          <ul className="hidden lg:flex lg:gap-6 text-lg mt-2 lg:mt-0 text-white">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/technology">Technology</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/news-events">News & Events</Link></li>
            <li><Link href="/investors">Investors</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      {/* About Content */}
      <section className="bg-white py-16 sm:py-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-5xl font-bold mb-6 text-gray-800">About OcularDx</h2>
          <p className="text-lg text-gray-600 mb-4">
            We are revolutionizing ophthalmic care through innovative technology and patient-centric solutions.
          </p>
          <p className="text-md text-gray-700 mb-8">
            At OcularDx, our mission is to provide the highest quality of eye care. We leverage state-of-the-art technology to ensure accurate diagnostics and personalized treatment plans. Our dedicated team of professionals is committed to improving the lives of patients by enhancing their vision and overall eye health.
          </p>
          <p className="text-md text-gray-700 mb-8">
            Our comprehensive approach includes advanced diagnostic tools, telemedicine solutions, and real-time monitoring to provide seamless care. Join us on our journey to make eye care accessible and effective for everyone.
          </p>
          <Link href="/">
            <span className="inline-block bg-blue-900 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 cursor-pointer">
              Back to Home
            </span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 sm:py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2023 OcularDx. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
