import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const products = [
  {
    id: 1,
    name: 'Air Zoom Pegasus',
    price: '$120',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Responsive cushioning for everyday runs.'
  },
  {
    id: 2,
    name: 'Retro High OG',
    price: '$170',
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNuZWFrZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    description: 'Iconic style that stands the test of time.'
  },
  {
    id: 3,
    name: 'Ultraboost Light',
    price: '$190',
    image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNuZWFrZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    description: 'Lightweight comfort for all-day wear.'
  },
];

interface ProductCardProps {
  product: typeof products[0];
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const [cardRef, isCardVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={cardRef}
      className={cn(
        "transition-all duration-700 ease-out",
        isCardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="overflow-hidden shadow-lg hover:shadow-xl h-full">
        <CardHeader className="p-0">
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-xl font-semibold mb-2">{product.name}</CardTitle>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-lg font-bold text-indigo-600 mb-4">{product.price}</p>
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700">View Details</Button>
        </CardContent>
      </Card>
    </div>
  );
};

const ProductShowcase: React.FC = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.5 });
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2
          ref={titleRef}
          className={cn(
            "text-3xl font-bold text-center text-gray-800 mb-12 transition-all duration-700 ease-out",
            isTitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          Our Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;