"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white py-2 shadow-md">
        <nav className="container mx-auto flex justify-between items-center px-4 flex-wrap">
          <Image
            src="/Logos_Transparent/8.png"
            alt="OcularDx Logo"
            width={200} // Adjusted the width
            height={200} // Adjusted the height
            className="w-32 h-auto" // Ensure responsive scaling
          />

          {/* Hamburger Icon */}
          <div className="block lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <ul className={`hidden lg:flex lg:gap-6 text-lg text-black`}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/technology">Technology</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/news-events">News & Events</Link></li>
            <li><Link href="/investors">Investors</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>


      {/* Modal Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white rounded-lg shadow-lg p-6 w-4/5 md:w-1/3">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={closeMenu} className="text-gray-600 hover:text-gray-800">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="mt-4 space-y-4">
              <li><Link href="/" onClick={closeMenu}>Home</Link></li>
              <li><Link href="/technology" onClick={closeMenu}>Technology</Link></li>
              <li><Link href="/about" onClick={closeMenu}>About</Link></li>
              <li><Link href="/news-events" onClick={closeMenu}>News & Events</Link></li>
              <li><Link href="/investors" onClick={closeMenu}>Investors</Link></li>
              <li><Link href="/contact" onClick={closeMenu}>Contact Us</Link></li>
            </ul>
          </div>
        </div>
      )}

      
{/* Introduction Section */}
<section className="bg-white py-16 relative overflow-hidden sm:py-8">
  <div className="container mx-auto text-center relative z-10 px-4">

    {/* Logo - Main Focus */}
    <Image
      src="/Logos_Solid/3.png"
      alt="OcularDx Logo"
      width={450} // Increased width for prominence
      height={400} // Adjusted for visual focus
      className="mx-auto mb-6 animate-bounceSlow" // Reduced bottom margin
    />

    {/* Supporting Paragraph */}
    <p className="text-lg sm:text-xl text-gray-600 mb-3 animate-fadeIn delay-200">
      At OcularDx, we leverage cutting-edge technology to ensure precise diagnostics 
      and personalized treatment for eye health.
    </p>
    <p className="text-md sm:text-lg text-gray-700 mb-6 animate-fadeIn delay-400">
      Join us on our mission to transform vision care and enhance the lives of millions worldwide.
    </p>

    {/* Call-to-Action Button */}
    <Link href="/learn-more">
      <span className="inline-block bg-blue-900 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300 cursor-pointer">
        Learn More
      </span>
    </Link>
  </div>
</section>




      {/* Technology Overview Section */}
      <section className="bg-gray-100 py-16 sm:py-12">
        <div className="container mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-4 text-blue-900">Technology Overview</h3>
          <p className="text-gray-700 mb-8">
            OcularDx provides state-of-the-art solutions for precision ophthalmology. Our technology ensures accurate diagnosis and advanced care.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Advanced Diagnostics",
                description: "Utilizing AI for precise diagnostics.",
                imgSrc: "/tech-image-1.jpg",
              },
              {
                title: "Telemedicine Solutions",
                description: "Connecting patients and doctors seamlessly.",
                imgSrc: "/tech-image-2.jpg",
              },
              {
                title: "Patient Monitoring",
                description: "Real-time monitoring for better care.",
                imgSrc: "/tech-image-3.jpg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* <Image
                  src={item.imgSrc}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="rounded-lg mb-4"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                /> */}
                <h4 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Video Section */}
      <section className="bg-white py-16 sm:py-12">
        <div className="container mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-4 text-blue-900">Learn More</h3>
          <iframe
            className="mx-auto rounded shadow-lg"
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="OcularDx Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* About OcularDx Section */}
      <section className="bg-gray-100 py-8 sm:py-4">
      <div className="container mx-auto text-center px-2">
        <h3 className="text-3xl font-bold mb-2 text-blue-900 flex items-center justify-center">
          About 
          <Image
            src="/Logos_Transparent/v2 (2).png"
            alt="OcularDx Logo"
            width={200} // Adjust width as needed
            height={60} // Adjust height as needed
            className="inline-block"
          />
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Home", href: "/", logo: "/home-icon.png" },
            { title: "Technology", href: "/technology", logo: "/tech-icon.png" },
            { title: "About", href: "/about", logo: "/about-icon.png" },
            { title: "News & Events", href: "/news-events", logo: "/news-icon.png" },
            { title: "Investors", href: "/investors", logo: "/investor-icon.png" },
            { title: "Contact Us", href: "/contact", logo: "/contact-icon.png" },
          ].map((card, index) => (
            <Link key={index} href={card.href} className="block text-center p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-semibold text-blue-900">{card.title}</h4>
            </Link>
          ))}
        </div>
      </div>
    </section>


      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 sm:py-6">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-left">
          <Image
            src="/Logos_Transparent/8.png"
            alt="OcularDx Logo"
            width={200} // Adjusted the width
            height={200} // Adjusted the height
            className="w-32 h-auto" // Ensure responsive scaling
          />
            <p className="mb-2">123 Visionary Lane, Eye City, Vision State, 45678</p>
            <p className="mb-2">Email: contact@oculardx.com</p>
          </div>
          <div className="text-left">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/technology">Technology</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/news-events">News & Events</Link></li>
              <li><Link href="/investors">Investors</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="text-left">
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-sm">&copy; 2025 OcularDx. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

