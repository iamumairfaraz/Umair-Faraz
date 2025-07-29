import React from 'react';
import { Server, Shield, Code, Users } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Server className="h-6 w-6" />,
      title: "System Administration",
      description: "Expert in managing servers, networks, and IT infrastructure"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security & Compliance",
      description: "Ensuring secure and compliant IT environments"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Technical Support",
      description: "Providing comprehensive technical solutions and support"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Collaboration",
      description: "Working effectively with cross-functional teams"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto animate-scale-x"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I'm Umair Faraz, a passionate and detail-oriented System Engineer with hands-on experience in managing IT systems, networks, and infrastructure. Currently working at Jadeed Group of Companies where I ensure seamless operations and scalable tech solutions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              My expertise lies in creating robust IT environments that support business growth while maintaining high standards of security and efficiency. I'm dedicated to continuous learning and staying updated with the latest technologies in the field.
            </p>
            <div className="flex flex-wrap gap-3">
              {['System Administration', 'Network Management', 'Server Configuration', 'Technical Support', 'IT Infrastructure', 'Problem Solving'].map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-300 hover:scale-105 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-right">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;