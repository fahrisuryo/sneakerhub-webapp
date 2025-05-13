import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react'; // Example icon

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-gray-700">
          <ShoppingBag className="inline-block mr-2 h-8 w-8 text-indigo-600" />
          SneakerHub
        </Link>
        <div className="flex space-x-4">
          <Link to="/products" className="text-gray-800 hover:text-indigo-600">Products</Link>
          <Link to="/about" className="text-gray-800 hover:text-indigo-600">About</Link>
          <Link to="/contact" className="text-gray-800 hover:text-indigo-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;