import React from 'react';
import { Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

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

interface FeatureItemProps {
  feature: typeof features[0];
  index: number;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ feature, index }) => {
  const [itemRef, isItemVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={itemRef}
      className={cn(
        "p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-700 ease-out",
        isItemVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex justify-center">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
};

const FeatureSection: React.FC = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;