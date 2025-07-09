import React from 'react';
import { ArrowRight, Star, Download, Users } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
  onNavigate: (page: 'browse' | 'upload') => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted, onNavigate }) => {
  return (
    <section className="relative pt-20 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-teal-900/20" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23334155%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            <span className="font-plaster block sm:inline">ShaderVault</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline">Premium 3D</span>
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent block sm:inline">
              {' '}Materials{' '}
            </span>
            <br className="hidden sm:block" />
            <span className="block sm:inline">for Creators</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Discover and sell high-quality textures, HDRIs, and materials for your 3D projects. 
            Join thousands of artists creating stunning visuals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0">
            <button
              onClick={onGetStarted}
              className="group flex items-center justify-center space-x-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-500 hover:to-teal-500 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="text-base sm:text-lg font-semibold">Start Browsing</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => onNavigate('upload')}
              className="flex items-center justify-center space-x-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-all"
            >
              <span className="text-base sm:text-lg font-semibold">Upload Materials</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-slate-400 px-4 sm:px-0">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
              <span className="text-sm sm:text-base">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Download className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
              <span className="text-sm sm:text-base">50K+ Downloads</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
              <span className="text-sm sm:text-base">5K+ Artists</span>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <Download className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Instant Download</h3>
            <p className="text-sm sm:text-base text-slate-400">Download materials instantly after purchase. No waiting, no hassle.</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Premium Quality</h3>
            <p className="text-sm sm:text-base text-slate-400">Curated collection of high-resolution materials from professional artists.</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700 md:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Creator Community</h3>
            <p className="text-sm sm:text-base text-slate-400">Connect with artists worldwide and showcase your work to millions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};