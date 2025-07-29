import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "BS in Information Technology",
      institution: "Virtual University of Pakistan",
      period: "Currently Enrolled",
      status: "In Progress",
      description: "Pursuing advanced knowledge in information technology, software development, and system analysis."
    },
    {
      degree: "Intermediate (ICS)",
      institution: "Intermediate in Computer Science",
      period: "2019",
      status: "Completed",
      description: "Focused on computer science fundamentals, mathematics, and programming concepts."
    },
    {
      degree: "Matric (Computer Science)",
      institution: "Secondary School Certificate",
      period: "2017",
      status: "Completed",
      description: "Foundation in computer science, mathematics, and general education."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto animate-scale-x"></div>
        </div>

        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:scale-102 hover:-translate-y-1 animate-fade-in-up group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center mb-2 md:mb-0">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors duration-300 group-hover:scale-110">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.degree}
                    </h3>
                    <p className="text-gray-600">
                      {item.institution}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{item.period}</span>
                  <span className={`ml-3 px-2 py-1 rounded-full text-xs font-medium ${
                    item.status === 'In Progress' 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;