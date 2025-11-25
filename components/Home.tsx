import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { ResumeSection } from './ResumeSection';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Footer } from './Footer';

export const Home: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');

    const handleScroll = () => {
        const sections = ['home', 'experience', 'skills', 'projects', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const offsetTop = element.offsetTop;
                const height = element.offsetHeight;
                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                    setActiveSection(section);
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen flex flex-col font-sans selection:bg-brand-brown selection:text-white">
            <Navbar activeSection={activeSection} />

            <main className="flex-grow">
                <Hero id="home" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 lg:py-24">
                        <div className="lg:col-span-7 space-y-16">
                            <ResumeSection id="experience" />
                        </div>
                        <div className="lg:col-span-5 space-y-16">
                            <Skills id="skills" />
                            <Contact id="contact" />
                        </div>
                    </div>

                    <Projects id="projects" />
                </div>
            </main>

            <Footer />
        </div>
    );
};
