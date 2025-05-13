import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Using the same product data as ProductShowcase for consistency
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
  {
    id: 4,
    name: 'Classic Leather',
    price: '$90',
    image: 'https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2hpdGUlMjBzbmVha2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Timeless design, everyday comfort.'
  },
  {
    id: 5,
    name: 'Trail Runner GTX',
    price: '$150',
    image: 'https://images.unsplash.com/photo-1520655792209-b751050ac16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhaWwlMjBydW5uaW5nJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', // Updated image
    description: 'Durable and waterproof for any terrain.'
  },
  {
    id: 6,
    name: 'Skate Pro Low',
    price: '$85',
    image: 'https://images.unsplash.com/photo-1566958769307-900900567650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2thdGUlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', // Updated image
    description: 'Built for performance and style on the board.'
  },
];

const ProductsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Products</h1>
          <p className="text-lg text-gray-600 mb-12">
            Browse our collection of the latest and greatest sneakers.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="p-0">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                <CardTitle className="text-xl font-semibold mb-2">{product.name}</CardTitle>
                <p className="text-gray-600 mb-2 text-sm flex-grow">{product.description}</p>
                <p className="text-lg font-bold text-indigo-600 mb-4">{product.price}</p>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 mt-auto">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
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

export default ProductsPage;