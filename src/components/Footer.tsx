import React from 'react';
import { Github, Twitter, Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-white font-plaster">ShaderVault</span>
            </div>
            <p className="text-slate-400 mb-3 sm:mb-4 text-sm sm:text-base">
              The premier marketplace for 3D materials, textures, and HDRIs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Marketplace</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">Browse Materials</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">Upload Content</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">Trending</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">New Releases</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">Help Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">Contact Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">Community</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">Guidelines</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">Cookie Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">Licenses</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800 text-center">
          <p className="text-slate-400 text-sm sm:text-base">
            © 2024 ShaderVault. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};