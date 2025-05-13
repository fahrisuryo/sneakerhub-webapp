import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import FeatureSection from '@/components/FeatureSection';
import NewsletterSignup from '@/components/NewsletterSignup';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ProductShowcase />
        <FeatureSection />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;