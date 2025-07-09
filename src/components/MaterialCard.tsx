import React from 'react';
import { Star, Download, ShoppingCart, Eye } from 'lucide-react';

interface Material {
  id: number;
  title: string;
  artist: string;
  price: number;
  rating: number;
  downloads: number;
  image: string;
  category: string;
  isPBR: boolean;
}

interface MaterialCardProps {
  material: Material;
  viewMode: 'grid' | 'list';
  onAddToCart: (item: {
    id: number;
    title: string;
    artist: string;
    price: number;
    image: string;
  }) => void;
}

export const MaterialCard: React.FC<MaterialCardProps> = ({ material, viewMode, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart({
      id: material.id,
      title: material.title,
      artist: material.artist,
      price: material.price,
      image: material.image,
    });
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-gray-900 rounded-lg p-4 sm:p-6 border border-gray-700 hover:border-gray-600 transition-all">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="relative w-full sm:w-24 h-48 sm:h-24 flex-shrink-0">
            <img
              src={material.image}
              alt={material.title}
              className="w-full h-full object-cover rounded-lg"
            />
            {material.isPBR && (
              <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                PBR
              </span>
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 sm:mb-2">
              <div className="mb-2 sm:mb-0">
                <h3 className="text-lg font-semibold text-white hover:text-blue-400 cursor-pointer">
                  {material.title}
                </h3>
                <p className="text-slate-400 text-sm">by {material.artist}</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-xl sm:text-2xl font-bold text-white">${material.price}</p>
                <span className="text-xs sm:text-sm text-teal-400 bg-teal-900/30 px-2 py-1 rounded">
                  {material.category}
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-3 sm:mb-4">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-slate-300 text-sm">{material.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Download className="w-4 h-4 text-slate-400" />
                <span className="text-slate-400 text-sm">{material.downloads}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button 
                onClick={handleAddToCart}
                className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors text-sm"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>
              <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm">
                <Eye className="w-4 h-4" />
                <span>Preview</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-all group">
      <div className="relative aspect-square">
        <img
          src={material.image}
          alt={material.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="flex space-x-3">
            <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors">
              <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button 
              onClick={handleAddToCart}
              className="p-2 bg-teal-600 text-white rounded-full hover:bg-teal-500 transition-colors"
            >
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
        
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex gap-1 sm:gap-2">
          {material.isPBR && (
            <span className="bg-blue-600 text-white text-xs px-1.5 sm:px-2 py-1 rounded">
              PBR
            </span>
          )}
          <span className="bg-teal-600 text-white text-xs px-1.5 sm:px-2 py-1 rounded">
            {material.category}
          </span>
        </div>
      </div>
      
      <div className="p-3 sm:p-4">
        <h3 className="text-base sm:text-lg font-semibold text-white mb-1 group-hover:text-blue-400 cursor-pointer line-clamp-1">
          {material.title}
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm mb-2 sm:mb-3">by {material.artist}</p>
        
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
              <span className="text-slate-300 text-xs sm:text-sm">{material.rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Download className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
              <span className="text-slate-400 text-xs sm:text-sm">{material.downloads}</span>
            </div>
          </div>
          <p className="text-lg sm:text-xl font-bold text-white">${material.price}</p>
        </div>
        
        <button 
          onClick={handleAddToCart}
          className="w-full flex items-center justify-center space-x-2 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-500 hover:to-teal-500 transition-all text-sm"
        >
          <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};