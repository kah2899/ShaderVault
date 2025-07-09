import React, { useState } from 'react';
import { ShoppingCart, User, Upload, Home, Search, LogOut, Menu, X } from 'lucide-react';
import type { Page } from '../App';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  cartItemCount: number;
  isLoggedIn: boolean;
  user: { name: string; email: string } | null;
  onLogin: () => void;
  onRegister: () => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  cartItemCount,
  isLoggedIn,
  user,
  onLogin,
  onRegister,
  onLogout,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
              <Search className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold font-plaster">ShaderVault</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <button
              onClick={() => onNavigate('home')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                currentPage === 'home'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <button
              onClick={() => onNavigate('browse')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                currentPage === 'browse'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>Browse</span>
            </button>
            {isLoggedIn && (
              <button
                onClick={() => onNavigate('upload')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                  currentPage === 'upload'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <Upload className="w-4 h-4" />
                <span>Upload</span>
              </button>
            )}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => onNavigate('cart')}
              className={`relative p-2 rounded-lg transition-all ${
                currentPage === 'cart'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-teal-500 text-white text-xs rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => onNavigate('profile')}
                  className="flex items-center space-x-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all"
                >
                  <User className="w-4 h-4 text-slate-300" />
                  <span className="text-slate-300 hidden xl:inline">{user?.name}</span>
                </button>
                <button
                  onClick={onLogout}
                  className="p-2 text-slate-400 hover:text-red-400 hover:bg-gray-800 rounded-lg transition-all"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <button
                  onClick={onLogin}
                  className="px-4 py-2 text-slate-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all"
                >
                  Login
                </button>
                <button
                  onClick={onRegister}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-500 hover:to-teal-500 transition-all"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>

          {/* Mobile Right Side */}
          <div className="flex lg:hidden items-center space-x-2">
            <button 
              onClick={() => onNavigate('cart')}
              className={`relative p-2 rounded-lg transition-all ${
                currentPage === 'cart'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-teal-500 text-white text-xs rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
            
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-slate-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-2 mt-4">
              <button
                onClick={() => handleNavigate('home')}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                  currentPage === 'home'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </button>
              <button
                onClick={() => handleNavigate('browse')}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                  currentPage === 'browse'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <Search className="w-5 h-5" />
                <span>Browse</span>
              </button>
              {isLoggedIn && (
                <button
                  onClick={() => handleNavigate('upload')}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                    currentPage === 'upload'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Upload className="w-5 h-5" />
                  <span>Upload</span>
                </button>
              )}
              
              {isLoggedIn ? (
                <>
                  <button
                    onClick={() => handleNavigate('profile')}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                      currentPage === 'profile'
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-300 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    <User className="w-5 h-5" />
                    <span>{user?.name}</span>
                  </button>
                  <button
                    onClick={() => {
                      onLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-gray-800 rounded-lg transition-all"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <div className="flex flex-col space-y-2 px-4 pt-2">
                  <button
                    onClick={() => {
                      onLogin();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full py-3 text-slate-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all text-center"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      onRegister();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-500 hover:to-teal-500 transition-all text-center"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};