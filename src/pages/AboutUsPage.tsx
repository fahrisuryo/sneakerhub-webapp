import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Target, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutUsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About SneakerHub</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We are passionate about sneakers and committed to bringing you the latest styles, timeless classics, and unparalleled quality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-16 text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Story</h2>
              <p className="text-gray-600">
                Founded in 2023, SneakerHub started as a small blog by enthusiasts and quickly grew into a premier destination for sneakerheads worldwide.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Target className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
              <p className="text-gray-600">
                To provide an exceptional shopping experience with a curated selection of authentic sneakers, backed by expert knowledge and customer service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Eye className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h2>
              <p className="text-gray-600">
                To be the most trusted and inspiring community for sneaker lovers, fostering a culture of style, innovation, and passion.
              </p>
            </div>
          </div>

          <div className="text-center">
             <Link to="/">
                <Button variant="outline" className="mt-8">
                Back to Home
                </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;