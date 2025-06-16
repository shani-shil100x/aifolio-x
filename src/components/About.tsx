
import { useState, useEffect } from 'react';

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div 
              className="relative overflow-hidden rounded-3xl glass p-8 group hover:scale-105 transition-all duration-500"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Developer workspace"
                className="w-full h-96 object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-xl opacity-70 animate-glow"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-60 animate-glow" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <h2 className="text-5xl md:text-6xl font-bold font-space mb-6">
                <span className="gradient-text">About</span>
                <br />
                <span className="text-gray-800">Me</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
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

              <div className="flex flex-wrap gap-4 mt-8">
                {['React', 'TypeScript', 'Node.js', 'Python', 'AWS'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-6 py-3 glass rounded-full text-gray-700 font-medium hover:scale-105 transition-transform duration-300"
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
