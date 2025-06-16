
import { useState, useEffect } from 'react';

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="section-spacing relative overflow-hidden bg-gray-950">
      {/* Dark Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10"></div>
      
      <div className="container-spacing relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div 
              className="relative overflow-hidden rounded-3xl premium-card p-6 lg:p-8 group hover:scale-105 transition-all duration-500"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Developer workspace"
                className="w-full h-80 lg:h-96 object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-xl opacity-50 animate-glow"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-40 animate-glow" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Content Side */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-space mb-6 lg:mb-8">
                <span className="gradient-text">About</span>
                <br />
                <span className="text-gray-100">Me</span>
              </h2>
              
              <div className="space-y-4 lg:space-y-6 text-base lg:text-lg text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience 
                  creating digital experiences that combine beautiful design with powerful functionality.
                </p>
                
                <p>
                  Specializing in React, Node.js, and modern web technologies, I love turning 
                  complex problems into simple, elegant solutions. When I'm not coding, 
                  you'll find me exploring new technologies or contributing to open-source projects.
                </p>
                
                <p>
                  My goal is to build applications that not only look amazing but also 
                  provide exceptional user experiences and drive real business value.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:gap-4 mt-6 lg:mt-8">
                {['React', 'TypeScript', 'Node.js', 'Python', 'AWS'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 lg:px-6 lg:py-3 premium-card text-gray-200 font-medium hover:scale-105 transition-transform duration-300 text-sm lg:text-base"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
