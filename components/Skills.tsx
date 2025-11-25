import React, { useEffect, useRef, useState } from 'react';
import { SkillItem } from '../types';

interface SkillsProps {
  id: string;
}

export const Skills: React.FC<SkillsProps> = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills: SkillItem[] = [
    { name: 'Figma', percentage: 90 },
    { name: 'UI/UX Design', percentage: 88 },
    { name: 'Adobe Photoshop', percentage: 70 },
    { name: 'Adobe Illustrator', percentage: 70 },
    { name: 'Design Concepts', percentage: 90 },
    { name: 'Prototyping & Wireframing', percentage: 85 },
    { name: 'AutoCAD / Autodesk SketchBook', percentage: 75 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect after triggering once so it doesn't reset when scrolling away
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id={id} ref={sectionRef} className="bg-white p-8 rounded-2xl shadow-sm border border-brand-accent/20">
      <h3 className="text-3xl font-serif font-bold text-brand-dark mb-8 border-b border-brand-dark/10 pb-4 inline-block pr-12">
        Skills
      </h3>
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name} className="group">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-brand-dark group-hover:text-brand-brown transition-colors">{skill.name}</span>
              <span className="font-mono text-sm text-brand-brown">{skill.percentage}%</span>
            </div>
            <div className="w-full bg-brand-accent/30 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-brand-dark h-2.5 rounded-full transition-all duration-1500 ease-out group-hover:bg-brand-gold"
                style={{ width: isVisible ? `${skill.percentage}%` : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};