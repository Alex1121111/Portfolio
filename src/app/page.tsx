"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    // Optional: if you want to dynamically create the script instead of using next/script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://conversate-ai.hyacinth.studio/static/god.js';
    script.setAttribute('c6', 'https://conversate-ai.hyacinth.studio');
    script.setAttribute('c4', 'min');
    script.setAttribute('c5', '12');
    script.setAttribute('c1', '');
    script.setAttribute('c2', 'https://conversate-ai.hyacinth.studio/static/close.svg');
    script.setAttribute('c3', 'https://conversate-ai.hyacinth.studio/embed/23');
    script.setAttribute('expand', 'https://conversate-ai.hyacinth.studio/static/expand.svg');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll">
      {/* Sections */}
      <div id="home" className="snap-start h-screen bg-cover bg-center bg-[url('/bg1.jpg')] flex flex-col items-center justify-center text-white text-4xl pt-20 relative">
        {/* Desktop Navigation Bar (only in Home) */}
        <nav className="font-japanese hidden md:flex absolute top-0 left-0 w-full justify-center py-4 gap-15 text-black text-6xl font-bold">
          <a href="#home" className="hover:text-red-400 transition">Home</a>
          <a href="#skills" className="hover:text-red-400 transition">Skills</a>
          <a href="#projects" className="hover:text-red-400 transition">Projects</a>
          <a href="#contact" className="hover:text-red-400 transition">Contact Me</a>
        </nav>

        {/* Persistant Hamburger Icon for Mobile*/}
        <button
          className="fixed top-4 left-4 z-50 flex flex-col justify-center items-center w-12 h-12 bg-opacity-60 rounded-lg md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={`block w-8 h-1 bg-white rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-8 h-1 bg-white rounded my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-8 h-1 bg-white rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Navigation Menu */}
        <div className={`fixed top-0 left-0 h-full w-64 bg-opacity-60 flex backdrop-blur-lg flex-col pt-20 gap-8 text-black text-2xl font-bold md:hidden z-40 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`} style={{ boxShadow: menuOpen ? '2px 0 8px rgba(0,0,0,0.2)' : 'none' }}>
          <a href="#home" className="hover:text-red-400 transition px-8 py-4" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#skills" className="hover:text-red-400 transition px-8 py-4" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" className="hover:text-red-400 transition px-8 py-4" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" className="hover:text-red-400 transition px-8 py-4" onClick={() => setMenuOpen(false)}>Contact Me</a>
        </div>

        <div className="responsive-text w-screen flex flex-col items-center justify-center gap-2 mb-80">
          <h1 className="font-japanese text-8xl text-white">Hello Samurai</h1>
          <h2 className="font-japanese text-8xl text-white">I am Sri Datta</h2>
        </div>
      </div>

      <div id="skills" className="snap-start h-screen bg-cover bg-center bg-[url('/bg2.jpg')] flex items-center justify-center text-white text-4xl pt-20">
        Skills Section
      </div>

      <div id="projects" className="snap-start h-screen bg-cover bg-center bg-[url('/bg3.jpg')] flex items-center justify-center text-white text-4xl pt-20">
        Projects Section
      </div>

      <div id="contact" className="snap-start h-screen bg-cover bg-center bg-[url('/bg4.jpg')] flex items-center justify-center text-white text-4xl pt-20">
        Contact Me Section
      </div>
    </div>
  );
}
