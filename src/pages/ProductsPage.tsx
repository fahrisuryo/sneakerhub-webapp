import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProductsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Products</h1>
          <p className="text-lg text-gray-600 mb-8">
            Browse our collection of the latest and greatest sneakers. More items coming soon!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder product cards - you can expand this similar to ProductShowcase */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="border rounded-lg p-6 shadow-lg">
                <div className="bg-gray-200 h-48 w-full mb-4 rounded animate-pulse"></div>
                <h3 className="text-xl font-semibold mb-2 h-6 bg-gray-200 rounded animate-pulse w-3/4"></h3>
                <p className="text-gray-500 h-4 bg-gray-200 rounded animate-pulse w-1/2 mb-4"></p>
                <Button className="w-full bg-indigo-500 h-10 animate-pulse"></Button>
              </div>
            ))}
          </div>
           <Link to="/">
            <Button variant="outline" className="mt-12">
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;