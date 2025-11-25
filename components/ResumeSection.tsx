import React from 'react';
import { ExperienceItem } from '../types';

interface ResumeSectionProps {
  id: string;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ id }) => {
  const experiences: ExperienceItem[] = [
    {
      id: '1',
      role: 'UI/UX Design • Internship',
      company: 'Dibbz, Jaipur',
      period: 'Jun 2025 - Sept 2025',
      type: 'work',
      description: [
        'Explored the world of UI/UX at Dibbz as a design intern.',
        'Learned by doing—sketching ideas, building user flows, and developing a deeper love for thoughtful, user-centered design.',
        'Contributed to real-time web and app projects.'
      ]
    },
    {
      id: '2',
      role: 'Design Intern',
      company: 'Interior Design Studio, Jaipur',
      period: 'May 2024 - Jul 2024',
      type: 'work',
      description: [
        'Fashion Illustration Series.',
        'Wallpaper Surface pattern Designs.',
        'Digital Art for Branding.'
      ]
    },
    {
      id: '3',
      role: 'Freelancer',
      company: 'Self Employed, Virtual',
      period: 'Jan 2021 - Present',
      type: 'work',
      description: [
        'Design custom artwork for clients.',
        'Ensure uniformity of the brand across all marketing platforms and materials.'
      ]
    },
  ];

  const education: ExperienceItem[] = [
    {
      id: 'ed1',
      role: 'Master of Design (M.Des), UI/UX Design',
      company: 'Vivekananda Global University, Jaipur',
      period: '2025 - 2027',
      type: 'education',
      description: []
    },
    {
      id: 'ed2',
      role: 'Bachelor of Fine Arts (B.F.A.)',
      company: 'IIS University, Jaipur',
      period: '2021 - 2025',
      type: 'education',
      description: []
    }
  ];

  return (
    <section id={id} className="space-y-12">
      {/* Experience */}
      <div>
        <h3 className="text-3xl font-serif font-bold text-brand-dark mb-8 border-b border-brand-dark/10 pb-4 inline-block pr-12">
          Experience
        </h3>
        <div className="space-y-10 border-l-2 border-brand-accent/50 ml-3 pl-8 md:ml-4 md:pl-10">
          {experiences.map((item) => (
            <div key={item.id} className="relative group">
              <span className="absolute -left-[2.75rem] top-1.5 h-4 w-4 rounded-full bg-brand-beige border-2 border-brand-brown group-hover:bg-brand-brown transition-colors"></span>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h4 className="text-xl font-bold text-brand-dark">{item.role}</h4>
                <span className="text-sm font-mono text-brand-brown font-medium bg-brand-accent/20 px-2 py-1 rounded mt-2 sm:mt-0 w-fit">
                  {item.period}
                </span>
              </div>
              <p className="text-brand-brown font-semibold mb-3 text-lg">{item.company}</p>
              <ul className="list-disc list-outside ml-4 space-y-1 text-brand-dark/80">
                {item.description.map((desc, i) => (
                  <li key={i} className="pl-1">{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-3xl font-serif font-bold text-brand-dark mb-8 border-b border-brand-dark/10 pb-4 inline-block pr-12">
          Education
        </h3>
        <div className="space-y-10 border-l-2 border-brand-accent/50 ml-3 pl-8 md:ml-4 md:pl-10">
           {education.map((item) => (
            <div key={item.id} className="relative group">
              <span className="absolute -left-[2.75rem] top-1.5 h-4 w-4 rounded-full bg-brand-beige border-2 border-brand-brown group-hover:bg-brand-brown transition-colors"></span>
               <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h4 className="text-xl font-bold text-brand-dark">{item.company}</h4>
                 <span className="text-sm font-mono text-brand-brown font-medium bg-brand-accent/20 px-2 py-1 rounded mt-2 sm:mt-0 w-fit">
                  {item.period}
                </span>
              </div>
              <p className="text-brand-brown font-medium text-lg italic">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};