import Image from 'next/image';
import ProductSection from './ProductSection';
import { products } from './products';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#F4F5F0]">
      {/* Hero Section */}
       <section className="relative py-32 bg-green-900">
              <div className="absolute inset-0 bg-black opacity-50">
                <Image 
                  src="/services.jpg"
                  alt="Agricultural Products"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              <div className="container mx-auto px-4 relative z-10">
                <div className="text-center">
                  {/* Main Title */}
                  <h1 className="text-5xl md:text-7xl font-bold text-white ">
                  Products
                  </h1>
                  
                  </div>
              </div>
            </section>

      {/* Product Sections */}
      <div className="py-30 space-y-30">
        
        {/* Focus Crops */}
        <section className="bg-white mx-4 md:mx-8 lg:mx-16 rounded-2xl shadow-sm">
          <ProductSection
            title="Focus Crops"
            products={products.focusCrops}
            gridCols="grid-cols-2 md:grid-cols-3 lg:grid-cols-4" bgColor={''}          />
        </section>

        {/* Animal Production */}
        <section className="bg-white mx-4 md:mx-8 lg:mx-16 rounded-2xl shadow-sm">
          <ProductSection
            title="Animal Production"
            products={products.animalProduction}
            gridCols="grid-cols-2 md:grid-cols-3" bgColor={''}          />
        </section>

        {/* Processed Foods */}
        <section className="bg-white mx-4 md:mx-8 lg:mx-16 rounded-2xl shadow-sm">
          <ProductSection
            title="Processed Foods"
            products={products.processedFoods}
            gridCols="grid-cols-2 md:grid-cols-4" bgColor={''}          />
        </section>

        {/* Agro-Allied Products */}
        <section className="bg-white mx-4 md:mx-8 lg:mx-16 rounded-2xl shadow-sm">
          <ProductSection
            title="Agro-Allied Products"
            products={products.agroAllied}
            gridCols="grid-cols-2 md:grid-cols-3" bgColor={''}          />
        </section>

        {/* Machinery & Inputs */}
        <section className="bg-white mx-4 md:mx-8 lg:mx-16 rounded-2xl shadow-sm">
          <ProductSection
            title="Machinery & Inputs"
            products={products.machineryInputs}
            gridCols="grid-cols-2 md:grid-cols-3" bgColor={''}          />
        </section>
      </div>
    </div>
  );
}
