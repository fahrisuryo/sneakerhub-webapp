import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;