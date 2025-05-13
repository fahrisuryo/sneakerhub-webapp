import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-100 py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2 md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Step Up Your Game
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Discover the latest collection of premium sneakers. Unmatched style, comfort, and performance.
            </p>
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg">
              Buy Now
            </Button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            {/* Placeholder for sneaker image */}
            <img 
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" 
              alt="Featured Sneaker" 
              className="rounded-lg shadow-2xl max-w-md w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;