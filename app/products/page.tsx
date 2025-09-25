import Image from 'next/image';
import ProductSection from './ProductSection';
import { products } from './products';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-green-900">
        <div className="absolute inset-0 bg-black opacity-50">
          <Image 
            src="/services.jpg"
            alt="Our Products"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our Products
            </h1>
          </div>
        </div>
      </section>

      {/* Product Sections */}
      <ProductSection
        title="Focus Crops"
        products={products.focusCrops}
        bgColor="bg-gray-50"
        gridCols="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      />

      <ProductSection
        title="Animal Production"
        products={products.animalProduction}
        bgColor="bg-white"
        cardBgColor="bg-gray-50"
        gridCols="grid-cols-2 md:grid-cols-3"
      />

      <ProductSection
        title="Processed Foods"
        products={products.processedFoods}
        bgColor="bg-gray-50"
        gridCols="grid-cols-2 md:grid-cols-4"
      />

      <ProductSection
        title="Agro-Allied Products"
        products={products.agroAllied}
        bgColor="bg-white"
        cardBgColor="bg-gray-50"
        gridCols="grid-cols-2 md:grid-cols-3"
      />

      <ProductSection
        title="Machinery & Inputs"
        products={products.machineryInputs}
        bgColor="bg-gray-50"
        cardBgColor="bg-gray-100"
        gridCols="grid-cols-2 md:grid-cols-3"
      />
    </div>
  );
}