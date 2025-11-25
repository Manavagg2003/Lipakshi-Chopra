import React from 'react';

interface ContactProps {
  id: string;
}

export const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <section id={id} className="bg-brand-dark text-brand-beige p-8 rounded-2xl shadow-xl">
      <h3 className="text-3xl font-serif font-bold text-white mb-8 border-b border-white/20 pb-4 inline-block pr-12">
        Contact
      </h3>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="p-2 bg-white/10 rounded-full">
            <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-accent mb-1">Phone</p>
            <a href="tel:6367XXX46" className="text-lg font-medium hover:text-brand-gold transition-colors">6367XXX46</a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="p-2 bg-white/10 rounded-full">
            <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-accent mb-1">Email</p>
            <a href="mailto:Lipakshichopra@gmail.com" className="text-lg font-medium hover:text-brand-gold transition-colors break-all">Lipakshichopra@gmail.com</a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="p-2 bg-white/10 rounded-full">
            <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-accent mb-1">Website</p>
            <a href="https://Rangakshi.com" target="_blank" rel="noreferrer" className="text-lg font-medium hover:text-brand-gold transition-colors">Rangakshi.com</a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="p-2 bg-white/10 rounded-full">
            <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-accent mb-1">Location</p>
            <p className="text-lg font-medium">Jaipur, Rajasthan</p>
          </div>
        </div>
      </div>
    </section>
  );
};