import React, { useState, useRef, useEffect } from 'react';
import { ProjectItem } from '../types';

interface ProjectsProps {
  id: string;
}

type Category = 'All' | 'Branding' | 'Illustrations' | 'UI/UX' | 'Art Collection';

const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    const updateParallax = () => {
      if (!containerRef.current || !parallaxRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only animate if element is in viewport (with some buffer)
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate distance from center of viewport
        const distance = (rect.top + rect.height / 2) - (windowHeight / 2);

        // Parallax factor: 
        // Negative factor makes the image move in the same direction as scroll (resisting the scroll movement),
        // creating a "depth" effect where the background seems further away.
        const speed = 0.1;
        const translateY = distance * -speed;

        parallaxRef.current.style.transform = `translate3d(0, ${translateY}px, 0)`;
      }
    };

    const onScroll = () => {
      rafId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('scroll', onScroll);
    updateParallax(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="group relative">
      <div
        ref={containerRef}
        className="overflow-hidden rounded-lg shadow-sm bg-brand-accent/10 aspect-[4/3] relative isolate cursor-pointer"
      >
        {/* Parallax Wrapper: Taller than container to allow movement */}
        <div
          ref={parallaxRef}
          className="absolute -top-[7.5%] left-0 w-full h-[115%] will-change-transform"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            onError={(e) => {
              // Fallback to a random placeholder if local image fails
              e.currentTarget.src = `https://picsum.photos/800/600?random=${project.id}`;
              // Remove handler to prevent infinite loop if fallback also fails
              e.currentTarget.onerror = null;
            }}
            className={`w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out ${project.category === 'UI/UX' ? 'object-top' : 'object-center'
              }`}
          />
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors duration-500 pointer-events-none"></div>
      </div>

      <div className="mt-4 flex justify-between items-center px-1">
        <div>
          <h4 className="text-lg font-serif font-bold text-brand-dark group-hover:text-brand-brown transition-colors">
            {project.title}
          </h4>
          <p className="text-xs text-brand-brown uppercase tracking-widest mt-1">{project.category}</p>
        </div>
        <div className="h-8 w-8 rounded-full border border-brand-dark/20 flex items-center justify-center text-brand-dark/20 group-hover:bg-brand-dark group-hover:border-brand-dark group-hover:text-brand-beige transition-all duration-300">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC<ProjectsProps> = ({ id }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const allProjects: ProjectItem[] = [
    { id: 'p1', title: 'Website Designs', category: 'UI/UX', imageUrl: 'public/assets/fokal.png', description: 'Web Design' },
    { id: 'p2', title: 'Mobile App', category: 'UI/UX', imageUrl: 'public/assets/dibbz.png', description: 'App Design' },
    { id: 'p3', title: 'Branding', category: 'Branding', imageUrl: 'public/assets/elvion.png', description: 'Identity Design' },
    { id: 'p4', title: 'Illustrations', category: 'Illustrations', imageUrl: 'public/assets/illustrations.png', description: 'Digital Illustration' },
    { id: 'p5', title: 'Art Collection', category: 'Art Collection', imageUrl: 'public/assets/potraits.png', description: 'Digital Painting' },
  ];

  const filteredProjects = activeCategory === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === activeCategory);

  const categories: Category[] = ['All', 'Branding', 'Illustrations', 'UI/UX', 'Art Collection'];

  return (
    <section id={id} className="py-16 space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">Selected Projects</h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-8 mt-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm md:text-base uppercase tracking-wider transition-all duration-300 border rounded-full ${activeCategory === category
                ? 'bg-brand-dark text-brand-beige border-brand-dark'
                : 'bg-transparent text-brand-brown border-transparent hover:border-brand-brown/30'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layout with Parallax Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};