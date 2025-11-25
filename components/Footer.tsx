import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-beige py-16 border-t border-brand-dark/5 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
          
          {/* Left Section: Let's Talk */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-brand-dark">Let's Talk</h3>
            
            <div className="space-y-1">
              <a href="mailto:Lipakshichopra@gmail.com" className="block text-lg text-brand-brown hover:text-brand-dark transition-colors">
                Lipakshichopra@gmail.com
              </a>
              <p className="text-brand-dark/60 max-w-xs">
                Based in Jaipur but love exploring other parts of the world.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-brand-dark hover:text-brand-brown transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06h.08zm3.543 1.718a3.356 3.356 0 00-2.557.543c-1.277.819-1.072 3.588 1.072 3.588 1.67 0 2.813-1.885 1.485-4.131zm-3.543 4.06a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 9a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-brand-dark hover:text-brand-brown transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Section: Copyright */}
          <div className="text-right">
             <p className="text-brand-brown text-xs md:text-sm">
              © {new Date().getFullYear()} Lipakshi Chopra. All rights reserved.
            </p>
          </div>
        </div>

        {/* Center Big Text */}
        <div className="text-center border-t border-brand-dark/5 pt-12">
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold text-brand-dark/20 tracking-widest cursor-default select-none uppercase">
            THANK-YOU
          </h2>
        </div>
      </div>
    </footer>
  );
};