import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const NewsletterSignup: React.FC = () => {
  return (
    <section className="py-16 bg-indigo-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <Mail className="h-12 w-12 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
        <p className="text-indigo-100 mb-2">
          Subscribe to our newsletter for the latest releases and special offers.
        </p>
        <p className="text-sm text-indigo-200 mb-6">
          Company Email: <a href="mailto:info@sneakerhub.com" className="underline hover:text-indigo-50">info@sneakerhub.com</a>
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-grow text-gray-800 placeholder-gray-500" 
          />
          <Button type="submit" variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;