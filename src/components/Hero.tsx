import { ChevronDown, ArrowRight, Sparkles, Code, Zap } from 'lucide-react';
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Enhanced Dark Animated Background */}
      <div className="absolute inset-0 gradient-bg-enhanced"></div>
      
      {/* Geometric Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="geometric-shape absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rotate-45 animate-float-slow"></div>
        <div className="geometric-shape absolute top-3/4 right-1/4 w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rotate-12 animate-float-delayed"></div>
        <div className="geometric-shape absolute top-1/2 right-1/3 w-8 h-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rotate-45 animate-float-reverse"></div>
      </div>
      
      {/* Enhanced Dark Floating Blobs */}
      <div className="absolute inset-0">
        <div className="blob absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-600/20 via-pink-600/15 to-cyan-600/20 animate-float-slow blob-morph"></div>
        <div className="blob absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-600/15 via-blue-600/20 to-purple-600/15 animate-float" style={{
        animationDelay: '2s'
      }}></div>
        <div className="blob absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-600/20 via-purple-600/15 to-cyan-600/20 animate-float-reverse" style={{
        animationDelay: '4s'
      }}></div>
      </div>

      {/* Enhanced Particle Effects */}
      <div className="absolute inset-0 particles-container">
        {[...Array(8)].map((_, i) => <div key={i} className="particle absolute w-1 h-1 bg-purple-400/40 rounded-full animate-float-particle" style={{
        left: `${15 + i * 12}%`,
        top: `${25 + i % 4 * 20}%`,
        animationDelay: `${i * 0.8}s`
      }}></div>)}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center container-spacing max-w-6xl">
        <div className="animate-fade-in-up-stagger">
          {/* Enhanced Heading with Dark Theme Typography */}
          <div className="mb-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-space mb-6 leading-tight py-0 my-0 pt-36 ">
              <span className="gradient-text-enhanced animate-gradient typing-animation">Kuze</span>
              <br />
              <span className="text-white text-shadow-xl animate-glow">Developer</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto animate-width-expand"></div>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in-delayed px-4">
            Crafting immersive digital experiences with cutting-edge technologies,
            <br className="hidden md:block" />
            <span className="gradient-text-subtle">pixel-perfect design</span>, and innovative solutions
          </p>

          {/* Enhanced Premium Animated Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center mb-12">
            {/* Primary CTA Button */}
            <button onClick={() => scrollToSection('projects')} className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 rounded-xl text-white font-semibold text-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1 magnetic-hover neon-glow-enhanced">
              {/* Button Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 animate-gradient-shift"></div>
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Ripple Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div className="ripple absolute inset-0 bg-white/20 rounded-full transform scale-0 group-active:animate-ripple"></div>
              </div>
              
              {/* Button Content */}
              <div className="relative flex items-center justify-center gap-3 z-10">
                <Sparkles className="w-5 h-5 animate-spin-slow" />
                <span className="tracking-wide">View My Work</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              
              {/* Shine Effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            </button>

            {/* Secondary CTA Button */}
            <button onClick={() => scrollToSection('contact')} className="group relative w-full sm:w-auto px-8 py-4 bg-gray-900/30 backdrop-blur-xl border-2 border-gray-700/50 rounded-xl text-white font-semibold text-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:border-purple-500/50 glass-button">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              
              {/* Button Content */}
              <div className="relative flex items-center justify-center gap-3 z-10">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="tracking-wide">Get In Touch</span>
                <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center group-hover:border-white transition-colors duration-300">
                  <ArrowRight className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-300" />
                </div>
              </div>
              
              {/* Hover Border Animation */}
              <div className="absolute inset-0 rounded-xl border-2 border-gradient-animated opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="animate-fade-in-extra-delayed">
            <div className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors duration-300 cursor-pointer group" onClick={() => scrollToSection('about')}>
              <div className="flex flex-col items-center">
                <span className="text-sm mb-3 tracking-wider font-medium">Explore More</span>
                <div className="relative">
                  <div className="w-6 h-10 border-2 border-gray-600 rounded-full group-hover:border-purple-400 transition-colors duration-300"></div>
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-purple-400 rounded-full animate-scroll-indicator"></div>
                </div>
                <ChevronDown className="w-5 h-5 mt-2 animate-bounce-slow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Dark Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-noise pointer-events-none"></div>
    </section>;
};
export default Hero;