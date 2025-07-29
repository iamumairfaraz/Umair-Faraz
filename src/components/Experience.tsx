import React from 'react';
import { Building2, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    "System maintenance and monitoring for optimal performance",
    "Server administration and configuration management",
    "Technical support and troubleshooting for end users",
    "Network infrastructure setup and maintenance",
    "Implementation of security protocols and best practices",
    "Documentation of system processes and procedures",
    "Collaboration with development teams for system integration",
    "Regular system backups and disaster recovery planning"
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto animate-scale-x"></div>
        </div>

        <div className="bg-gray-50 rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:scale-102 animate-fade-in-up group">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-blue-100 p-3 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors duration-300 group-hover:scale-110">
               <img
  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEVHcEzsGTruGTntGTrrGjvrGjs6RYMWR4gaR4cSR4gaR4cDSIoaR4caR4cWR4gYR4cYR4fuGDkSSInsGToaR4fzESfrGjsaR4fwFTXwFTTrGjvrGjvrGjvuGTnrGjsKSYt3OW7LJEszQ4EaR4eeMWAMQOKIAAAAJXRSTlMATWPZ/80M7f+sN/y/HtGEcKsreZYQ7t01Ivgah8COXbP//0h/afQeyQAAAPBJREFUeAHt0lWCg0AQBNAKNEPFDXe7/xl3G4nrfx4OxTi+MrMUnrNF4TnnMvALGGNeBlyS7nzxPLAk1cq8DKj1k8Bmu9tuqO7K2J97cXC1Ftw5nrupiQWueVv4wRRYhJtwi0kU63lDHkyCe2kgkg0BYuY/WWopsCO589P7tSoqAmDI+VDbiv8OGOSFiAxV7zi3fAxRcoNBkFrOfqh5wTLHGNX6xiYcMdku4zEADYzdLASjg2vsCmqtPXKnXoo9fi+xr5ece96GanEe4MSCimxpeNJeT4GT54lIt+RoczXbUS7KiYFy5ZLhgxUVzSKDe39jRA107Pd9HQAAAABJRU5ErkJggg=="
  alt="Jadeed Group Logo"
  className="w-6 h-6 rounded-full object-contain"
/>

              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  System Engineer
                  {/* Optional role icon */}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                 <img
  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEVHcEzsGTruGTntGTrrGjvrGjs6RYMWR4gaR4cSR4gaR4cDSIoaR4caR4cWR4gYR4cYR4fuGDkSSInsGToaR4fzESfrGjsaR4fwFTXwFTTrGjvrGjvrGjvuGTnrGjsKSYt3OW7LJEszQ4EaR4eeMWAMQOKIAAAAJXRSTlMATWPZ/80M7f+sN/y/HtGEcKsreZYQ7t01Ivgah8COXbP//0h/afQeyQAAAPBJREFUeAHt0lWCg0AQBNAKNEPFDXe7/xl3G4nrfx4OxTi+MrMUnrNF4TnnMvALGGNeBlyS7nzxPLAk1cq8DKj1k8Bmu9tuqO7K2J97cXC1Ftw5nrupiQWueVv4wRRYhJtwi0kU63lDHkyCe2kgkg0BYuY/WWopsCO589P7tSoqAmDI+VDbiv8OGOSFiAxV7zi3fAxRcoNBkFrOfqh5wTLHGNX6xiYcMdku4zEADYzdLASjg2vsCmqtPXKnXoo9fi+xr5ece96GanEe4MSCimxpeNJeT4GT54lIt+RoczXbUS7KiYFy5ZLhgxUVzSKDe39jRA107Pd9HQAAAABJRU5ErkJggg=="
  alt="Jadeed Group Logo"
  className="w-6 h-6 rounded-full object-contain"
/>

                  <p className="text-lg text-blue-600 font-semibold">
                    Jadeed Group of Companies
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="font-medium">01-01-2021 – Present</span>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-gray-600 leading-relaxed text-lg">
              As a System Engineer at Jadeed Group of Companies, I play a crucial role in maintaining and optimizing the IT infrastructure that supports our organization's operations. My position involves ensuring system reliability, implementing scalable solutions, and providing comprehensive technical support.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Key Responsibilities:
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              {responsibilities.map((responsibility, index) => (
                <div
                  key={index}
                  className={`flex items-start hover:bg-white p-2 rounded transition-colors duration-300 animate-fade-in-up delay-[${index * 100}ms]`}
                >
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-600">{responsibility}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300 animate-fade-in-up delay-[800ms]">
            <p className="text-blue-800 font-medium">
              "Committed to delivering reliable IT solutions that drive business efficiency and support organizational growth."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
