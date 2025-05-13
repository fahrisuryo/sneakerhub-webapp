import React from 'react';
import { Truck, RotateCcw, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Truck className="h-10 w-10 text-indigo-600 mb-4" />,
    title: 'Free Shipping',
    description: 'Enjoy free shipping on all orders over $50.',
  },
  {
    icon: <RotateCcw className="h-10 w-10 text-indigo-600 mb-4" />,
    title: '30-Day Returns',
    description: 'Not satisfied? Return your items within 30 days for a full refund.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-indigo-600 mb-4" />,
    title: 'Secure Payments',
    description: 'Shop with confidence using our secure payment gateways.',
  },
];

const FeatureSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;