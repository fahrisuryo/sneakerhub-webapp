import React from 'react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const HeroSection: React.FC = () => {
  const [textRef, isTextVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const [imageRef, isImageVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-100 py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="md:flex md:items-center">
          <div
            ref={textRef}
            className={cn(
              "md:w-1/2 md:text-left transition-all duration-1000 ease-out",
              isTextVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
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
          <div
            ref={imageRef}
            className={cn(
              "md:w-1/2 mt-10 md:mt-0 flex justify-center transition-all duration-1000 ease-out delay-300",
              isImageVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
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