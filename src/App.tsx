import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { Instagram, Facebook, Github } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Umair Faraz</h3>
            <p className="text-gray-400 mb-4">System Engineer</p>
            <div className="flex justify-center space-x-6 mb-4">
              <a
                href="https://www.instagram.com/iamumairfaraz"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.facebook.com/iamumairfaraz"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6 hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://github.com/iamumairfaraz"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6 hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Umair Faraz. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;