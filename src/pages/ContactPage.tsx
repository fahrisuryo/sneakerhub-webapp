import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-600">We'd love to hear from you! Send us a message or find us at our locations.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <Input type="text" id="name" placeholder="Your Name" className="mt-1" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <Input type="email" id="email" placeholder="you@example.com" className="mt-1" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <Textarea id="message" placeholder="Your message..." rows={4} className="mt-1" />
              </div>
              <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
                Send Message
              </Button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
            <div className="flex items-start space-x-3">
              <Mail className="h-6 w-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-700">Email</h3>
                <a href="mailto:info@sneakerhub.com" className="text-indigo-600 hover:underline">info@sneakerhub.com</a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="h-6 w-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-700">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-6 w-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-700">Address</h3>
                <p className="text-gray-600">123 Sneaker Street, Kicksville, CA 90210</p>
              </div>
            </div>
          </div>
        </div>
         <div className="text-center mt-12">
            <Link to="/">
                <Button variant="outline">
                Back to Home
                </Button>
            </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;