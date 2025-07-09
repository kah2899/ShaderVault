import React from 'react';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';

interface CartItem {
  id: number;
  title: string;
  artist: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onRemoveItem: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onContinueShopping: () => void;
}

export const Cart: React.FC<CartProps> = ({ items, onRemoveItem, onUpdateQuantity, onContinueShopping }) => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-950 pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">Shopping Cart</h1>
            <p className="text-slate-400 text-sm sm:text-base">Your cart is currently empty</p>
          </div>

          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-10 h-10 text-slate-400" />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Your cart is empty</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              Looks like you haven't added any materials to your cart yet. Browse our collection to find amazing 3D assets.
            </p>
            <button 
              onClick={onContinueShopping}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-500 hover:to-teal-500 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Continue Shopping</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">Shopping Cart</h1>
          <p className="text-slate-400 text-sm sm:text-base">
            {items.length} item{items.length !== 1 ? 's' : ''} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-gray-900 rounded-lg p-4 sm:p-6 border border-gray-700">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-24 h-48 sm:h-24 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                        <p className="text-slate-400 text-sm">by {item.artist}</p>
                      </div>
                      <div className="text-left sm:text-right mt-2 sm:mt-0">
                        <p className="text-xl font-bold text-white">${item.price}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-slate-300 text-sm">Quantity:</span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="p-1 text-slate-400 hover:text-white hover:bg-gray-800 rounded transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-1 text-slate-400 hover:text-white hover:bg-gray-800 rounded transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between sm:justify-end space-x-4">
                        <p className="text-lg font-semibold text-white">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-2 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg p-4 sm:p-6 border border-gray-700 sticky top-24">
              <h2 className="text-xl font-semibold text-white mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-slate-300">
                  <span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-700 pt-3">
                  <div className="flex justify-between text-white font-semibold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-500 hover:to-teal-500 transition-all font-medium mb-3">
                Proceed to Checkout
              </button>
              
              <button 
                onClick={onContinueShopping}
                className="w-full py-2 text-slate-300 hover:text-white transition-colors text-sm"
              >
                Continue Shopping
              </button>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h3 className="text-white font-medium mb-3">Secure Checkout</h3>
                <div className="text-xs text-slate-400 space-y-1">
                  <p>• SSL encrypted payment</p>
                  <p>• Instant download after purchase</p>
                  <p>• 30-day money-back guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};