import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">SneakerHub</h3>
            <p className="text-sm">Your one-stop shop for the freshest kicks on the market. Quality and style delivered.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="hover:text-indigo-400">Products</Link></li>
              <li><Link to="/about" className="hover:text-indigo-400">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400" aria-label="Facebook"><Facebook size={24} /></a>
              <a href="#" className="hover:text-indigo-400" aria-label="Twitter"><Twitter size={24} /></a>
              <a href="#" className="hover:text-indigo-400" aria-label="Instagram"><Instagram size={24} /></a>
              <a href="#" className="hover:text-indigo-400" aria-label="LinkedIn"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SneakerHub. All rights reserved.</p>
          <p>Created by Fahri Suryo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;