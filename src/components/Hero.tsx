
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg"></div>
      
      {/* Floating Blobs */}
      <div className="absolute inset-0">
        <div className="blob absolute top-20 left-20 w-72 h-72 bg-purple-500/30 animate-float"></div>
        <div className="blob absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="blob absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/25 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold font-space mb-6 leading-tight">
            <span className="gradient-text animate-gradient">Creative</span>
            <br />
            <span className="text-white text-shadow-lg">Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting immersive digital experiences with cutting-edge technologies
            and pixel-perfect design
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="glass neon-glow text-white border-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass text-white border-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
