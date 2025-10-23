// app/components/ProductCard.tsx
import Image from 'next/image';

interface ProductCardProps {
  imageSrc: string;
  altText: string;
  productName: string;
  bgColor?: string;
}

export default function ProductCard({ 
  imageSrc, 
  altText, 
  productName, 
  bgColor = "bg-white" 
}: ProductCardProps) {
  return (
    <div
      className={`${bgColor} rounded-lg cursor-pointer hover:shadow-md transition-shadow duration-300 p-4 text-center group`}
    >
      {/* Image Container */}
       <div className="w-full flex items-center justify-center mb-4">
        <div className="relative w-full max-w-[180px] aspect-square">
          <Image
            src={imageSrc}
            alt={altText}
            fill
            className="object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          />
        </div>
      </div>

      {/* Product Name */}
      <h3 className="text-lg font-medium text-gray-900">{productName}</h3>
    </div>
  );
}
