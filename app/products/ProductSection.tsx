// app/components/ProductSection.tsx
import ProductCard from './ProductCard';

interface ProductSectionProps {
  title: string;
  products: Array<{ name: string; image: string }>;
  bgColor: string;
  cardBgColor?: string;
  gridCols: string;
}

export default function ProductSection({ 
  title, 
  products, 
  bgColor, 
  cardBgColor = "bg-white", 
  gridCols 
}: ProductSectionProps) {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#246A21] mb-4">{title}</h2>
          </div>
          
          <div className={`grid ${gridCols} gap-4`}>
            {products.map((product, index) => (
              <ProductCard
                key={index}
                imageSrc={product.image}
                altText={product.name}
                productName={product.name}
                bgColor={cardBgColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}