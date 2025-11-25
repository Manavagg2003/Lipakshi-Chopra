import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  id: string;
}

export const Hero: React.FC<HeroProps> = ({ id }) => {
  return (
    <section id={id} className="relative pt-12 md:pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">

          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <div className="relative">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-brand-dark leading-[0.9]">
                Lipakshi <br />
                <span className="text-brand-brown">Chopra</span>
              </h1>
              <div className="flex items-baseline gap-4 mt-2 md:mt-4 justify-center lg:justify-start">
                <span className="text-xl md:text-2xl font-serif italic text-brand-brown">aka.</span>
                <span className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-brand-dark italic">
                  Rangakshi
                </span>
              </div>
            </div>

            <div className="w-24 h-1 bg-brand-dark/10 mx-auto lg:mx-0 my-6"></div>

            <p className="text-sm md:text-base tracking-[0.2em] uppercase text-brand-dark/60 font-medium">
              UI/UX Designer & Visual Artist
            </p>

            <div className="pt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#contact" className="group relative px-8 py-3 bg-brand-dark text-brand-beige rounded-full overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                <span className="relative z-10 font-medium">Contact Me</span>
                <div className="absolute inset-0 h-full w-full bg-brand-brown transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </a>
            </div>

            <div className="pt-8 hidden lg:block">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-brown animate-bounce">
                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Right Image */}
          {/* <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"> */}
          {/* Container for Portrait Image */}
          {/* <div className="relative z-10 w-72 h-[26rem] md:w-80 md:h-[30rem] lg:w-[420px] lg:h-[560px]"> */}
          {/* Abstract Shapes Background */}
          {/* <div className="absolute top-6 -right-6 w-full h-full rounded-full border-2 border-brand-gold/60 z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-full h-full rounded-full bg-brand-brown/5 z-0"></div> */}

          {/* Main Image - Arch Shape */}
          <div>
            <Link to="/pixel-perfection">
              <img
                src="lippi_news.png"
                alt="Lipakshi Chopra"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 cursor-pointer"
              />
            </Link>
          </div>

          {/* Floating decorative badge */}
          {/* <div className="absolute top-10 right-0 bg-brand-beige/90 backdrop-blur px-4 py-6 rounded-full shadow-lg z-20 border border-brand-dark/5 transform rotate-12">
            <div className="text-xs font-serif text-brand-dark font-bold tracking-widest uppercase text-center">
              Est.<br />2021
            </div>
          </div> */}
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </section>
  );
};