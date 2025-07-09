import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Browse } from './components/Browse';
import { Upload } from './components/Upload';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';

export type Page = 'home' | 'browse' | 'upload' | 'profile' | 'cart';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [cartItems, setCartItems] = useState<Array<{
    id: number;
    title: string;
    artist: string;
    price: number;
    image: string;
    quantity: number;
  }>>([]);

  const openAuthModal = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const handleLogin = (email: string, password: string) => {
    // Mock login - in real app, this would authenticate with backend
    setUser({ name: 'John Doe', email });
    setIsLoggedIn(true);
    closeAuthModal();
  };

  const handleRegister = (name: string, email: string, password: string) => {
    // Mock registration - in real app, this would create account
    setUser({ name, email });
    setIsLoggedIn(true);
    closeAuthModal();
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const addToCart = (item: {
    id: number;
    title: string;
    artist: string;
    price: number;
    image: string;
  }) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateCartQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onGetStarted={() => setCurrentPage('browse')} onNavigate={setCurrentPage} />;
      case 'browse':
        return <Browse onAddToCart={addToCart} />;
      case 'upload':
        return <Upload />;
      case 'cart':
        return <Cart 
          items={cartItems}
          onRemoveItem={removeFromCart}
          onUpdateQuantity={updateCartQuantity}
          onContinueShopping={() => setCurrentPage('browse')}
        />;
      case 'profile':
        return <div className="min-h-screen bg-gray-950 pt-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-8">Profile</h1>
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="bg-gray-900 rounded-lg p-6">
                <p className="text-slate-300">Welcome back, {user?.name}!</p>
                <p className="text-slate-400">{user?.email}</p>
              </div>
            </div>
          </div>
        </div>;
      default:
        return <Hero onGetStarted={() => setCurrentPage('browse')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Header 
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        isLoggedIn={isLoggedIn}
        user={user}
        onLogin={() => openAuthModal('login')}
        onRegister={() => openAuthModal('register')}
        onLogout={handleLogout}
      />
      
      <main>
        {renderCurrentPage()}
      </main>

      <Footer />

      <AuthModal
        isOpen={isAuthModalOpen}
        mode={authMode}
        onClose={closeAuthModal}
        onLogin={handleLogin}
        onRegister={handleRegister}
        onSwitchMode={setAuthMode}
      />
    </div>
  );
}

export default App;