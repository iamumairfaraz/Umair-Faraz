import React from 'react';
import { Building2, Calendar, CheckCircle } from 'lucide-react';

const experiences = [
  {
    role: 'System Engineer',
    company: 'Jadeed Group of Companies',
    duration: '01/01/2022 – Present',
    responsibilities: [
      "Leading IT infrastructure management across all company sites (onsite + remote)",
      "Managing servers (Windows/Linux), domain controllers, data backups, and system security",
      "Administering CCTV systems including camera installation, NVR/DVR configuration, and remote monitoring setup",
      "Troubleshooting complex hardware, software, and network issues across departments",
      "Maintaining LAN/WAN connectivity, routers, switches, and wireless networks",
      "Overseeing user access, Active Directory, and email/server accounts",
      "Providing system upgrades and support across multiple remote branches",
      "Coordinating with vendors and internal teams to ensure 24/7 system availability"
    ],
    quote: "Committed to delivering reliable IT solutions that drive business efficiency and support organizational growth."
  },
  {
    role: 'IT Intern',
    company: 'Jadeed Group of Companies',
    duration: '01/11/2020 – 31/12/2021',
    responsibilities: [
      "Delivered hands-on IT support for users in southern region offices",
      "Maintained local systems, routers, and printers and supported day-to-day tech operations",
      "Assisted with system setups, repairs, and network troubleshooting"
    ]
  },
  {
    role: 'Front Desk',
    company: 'Jadeed Group of Companies',
    duration: '01/01/2020 – 01/10/2020',
    responsibilities: [
      "Managed front-desk operations, client interaction, and admin support",
      "Served as first point of contact, maintaining a professional company image"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto animate-scale-x"></div>
        </div>

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-lg shadow-md p-6 md:p-8 mb-10 hover:shadow-lg transition-all duration-300 hover:scale-102 animate-fade-in-up group"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors duration-300 group-hover:scale-110">
                  <Building2 className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold mt-1">
                    {exp.company}
                  </p>
                </div>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="h-5 w-5 mr-2" />
                <span className="font-medium">{exp.duration}</span>
              </div>
            </div>

            {exp.responsibilities && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Responsibilities:
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-start hover:bg-white p-2 rounded transition-colors duration-300 animate-fade-in-up delay-[${i * 100}ms]`}
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {exp.quote && (
              <div className="mt-8 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300 animate-fade-in-up delay-[800ms]">
                <p className="text-blue-800 font-medium">{exp.quote}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
