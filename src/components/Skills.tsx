
import { Code, Database, Globe, Smartphone, Zap, Cpu } from 'lucide-react';

const Skills = () => {
  const skills = [
    { 
      name: 'Frontend Development', 
      icon: Globe, 
      progress: 95,
      description: 'React, Vue, Angular',
      color: 'from-blue-400 to-cyan-400'
    },
    { 
      name: 'Backend Development', 
      icon: Database, 
      progress: 90,
      description: 'Node.js, Python, PostgreSQL',
      color: 'from-green-400 to-emerald-400'
    },
    { 
      name: 'Mobile Development', 
      icon: Smartphone, 
      progress: 85,
      description: 'React Native, Flutter',
      color: 'from-purple-400 to-pink-400'
    },
    { 
      name: 'Cloud & DevOps', 
      icon: Zap, 
      progress: 88,
      description: 'AWS, Docker, Kubernetes',
      color: 'from-yellow-400 to-orange-400'
    },
    { 
      name: 'AI & Machine Learning', 
      icon: Cpu, 
      progress: 80,
      description: 'TensorFlow, PyTorch',
      color: 'from-red-400 to-pink-400'
    },
    { 
      name: 'Full Stack Architecture', 
      icon: Code, 
      progress: 92,
      description: 'System Design, Microservices',
      color: 'from-indigo-400 to-purple-400'
    },
  ];

  return (
    <section id="skills" className="section-spacing relative overflow-hidden bg-gray-900">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900"></div>
      
      <div className="container-spacing relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-space mb-4 lg:mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="group relative p-6 lg:p-8 premium-card hover:scale-105 transition-all duration-500 hover:shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 blur-xl`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex p-3 lg:p-4 rounded-2xl bg-gradient-to-r ${skill.color} mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon size={28} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg lg:text-xl font-bold text-gray-100 mb-2">{skill.name}</h3>
                <p className="text-gray-400 mb-4 lg:mb-6 text-sm lg:text-base">{skill.description}</p>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300 font-medium">Proficiency</span>
                    <span className="text-gray-400">{skill.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
