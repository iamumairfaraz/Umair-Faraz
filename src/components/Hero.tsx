import React from 'react';
import { Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-white pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center relative z-10">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in-up">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOo8G7REltlTGKu708SkhhgrqW0T1ZOYisX9HjfC1shyqpm3vQf-qwZ2otmH_3XOx7q5hbvSmNIsa-usJSFXT1Pa3SZlEdqOd8xYzM4whXuAZhUB5DJRSi75oWMHEDoYBMzPZe2PONh89DkCfXsnLs2j09ZW-ZtBh005ze8jOGvzr_dwBTdI1BMAGe5ZH1/s320/4251-removebg-preview.png"
              alt="Umair Faraz - System Engineer"
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-blue-200"
            />
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in-up animation-delay-200">
            Umair Faraz
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-600 font-semibold mb-6 animate-fade-in-up animation-delay-400">
            System Engineer
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600">
            Crafting reliable IT systems for efficient digital infrastructure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-800">
            <a
              href="https://drive.google.com/file/d/1Nz73R-tClcQVUDx1c0JqMt2Sw9X0E8uZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 group"
            >
              <Download className="h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </a>
            <button
              onClick={scrollToAbout}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              Learn More
            </button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors hover:scale-110"
          >
            <ChevronDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
