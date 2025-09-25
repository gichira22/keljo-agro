// app/components/ProductCard.tsx
import Image from 'next/image';

interface ProductCardProps {
  imageSrc: string;
  altText: string;
  productName: string;
  bgColor?: string;
}

export default function ProductCard({ imageSrc, altText, productName, bgColor = "bg-white" }: ProductCardProps) {
  return (
    <div className={`${bgColor} rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300 p-4 text-center group`}>
      <div className="w-20 h-20 mx-auto mb-3">
        <Image 
          src={imageSrc}
          alt={altText}
          width={80}
          height={80}
          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-lg font-medium text-gray-900">{productName}</h3>
    </div>
  );
}