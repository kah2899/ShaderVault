import React, { useState } from 'react';
import { Search, Filter, Grid, List, Download, Star, ShoppingCart } from 'lucide-react';
import { MaterialCard } from './MaterialCard';

interface BrowseProps {
  onAddToCart: (item: {
    id: number;
    title: string;
    artist: string;
    price: number;
    image: string;
  }) => void;
}

const categories = ['All', 'Textures', 'HDRIs', 'Materials', 'Seamless', 'PBR'];
const sortOptions = ['Featured', 'Newest', 'Price: Low to High', 'Price: High to Low', 'Most Downloaded'];

const mockMaterials = [
  {
    id: 1,
    title: 'Concrete Wall Texture',
    artist: 'John Smith',
    price: 15,
    rating: 4.8,
    downloads: 1200,
    image: 'https://images.pexels.com/photos/1083577/pexels-photo-1083577.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Textures',
    isPBR: true,
  },
  {
    id: 2,
    title: 'Sunset HDRI Pack',
    artist: 'Maria Garcia',
    price: 25,
    rating: 4.9,
    downloads: 850,
    image: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'HDRIs',
    isPBR: false,
  },
  {
    id: 3,
    title: 'Wood Planks Seamless',
    artist: 'Alex Johnson',
    price: 12,
    rating: 4.7,
    downloads: 1500,
    image: 'https://images.pexels.com/photos/326311/pexels-photo-326311.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Seamless',
    isPBR: true,
  },
  {
    id: 4,
    title: 'Metal Rust Material',
    artist: 'Sarah Wilson',
    price: 18,
    rating: 4.6,
    downloads: 920,
    image: 'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Materials',
    isPBR: true,
  },
  {
    id: 5,
    title: 'Fabric Texture Pack',
    artist: 'Mike Brown',
    price: 22,
    rating: 4.8,
    downloads: 750,
    image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Textures',
    isPBR: true,
  },
  {
    id: 6,
    title: 'Stone Wall HDRI',
    artist: 'Lisa Davis',
    price: 30,
    rating: 4.9,
    downloads: 650,
    image: 'https://images.pexels.com/photos/1029613/pexels-photo-1029613.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'HDRIs',
    isPBR: false,
  },
];

export const Browse: React.FC<BrowseProps> = ({ onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredMaterials = mockMaterials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.artist.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || material.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-950 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">Browse Materials</h1>
          <p className="text-slate-400 text-sm sm:text-base">Discover premium 3D materials, textures, and HDRIs</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 sm:mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search materials, artists, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 sm:px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              >
                {sortOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              
              <button className="flex items-center justify-center space-x-2 px-3 sm:px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white hover:bg-gray-800 transition-colors text-sm sm:text-base">
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
              
              <div className="flex border border-gray-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 ${viewMode === 'grid' ? 'bg-blue-600' : 'bg-gray-900'} text-white hover:bg-blue-500 transition-colors flex-1 sm:flex-none`}
                >
                  <Grid className="w-4 h-4 mx-auto" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 ${viewMode === 'list' ? 'bg-blue-600' : 'bg-gray-900'} text-white hover:bg-blue-500 transition-colors flex-1 sm:flex-none`}
                >
                  <List className="w-4 h-4 mx-auto" />
                </button>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-900 text-slate-300 hover:bg-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-4 sm:mb-6">
          <p className="text-slate-400 text-sm sm:text-base">
            Showing {filteredMaterials.length} results
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Materials Grid */}
        <div className={`grid gap-4 sm:gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredMaterials.map(material => (
            <MaterialCard 
              key={material.id} 
              material={material} 
              viewMode={viewMode}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {filteredMaterials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-base sm:text-lg mb-4">No materials found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors text-sm sm:text-base"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};