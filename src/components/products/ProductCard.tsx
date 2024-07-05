import Image from 'next/image';
import React from 'react';
import { CiStar } from "react-icons/ci";



interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const discountedPrice = product.price * (1 - product.discountPercentage / 100);


    return (
        <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 cursor-pointer transition-transform duration-200 flex flex-col justify-center">
            <div className="relative w-full h-48">
                <Image
                    fill
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full object-cover"
                />
                {product.discountPercentage > 0 && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        {product.discountPercentage.toFixed(0)}% OFF
                    </div>
                )}
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-1 truncate">{product.title}</h3>
                <p className="text-sm text-gray-400 mb-2 truncate">{product.brand}</p>
                <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                        <CiStar
                            key={i}
                            className={`h-5 w-5 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-500'}`}
                        />
                    ))}
                    <span className="ml-1 text-sm text-gray-400">({product.rating.toFixed(1)})</span>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-lg font-bold text-white">${discountedPrice.toFixed(2)}</span>
                        {product.discountPercentage > 0 && (
                            <span className="ml-2 text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
                        )}
                    </div>
                    <span className={`text-sm font-semibold ${product.stock <= 5 ? 'text-red-500' : 'text-green-500'}`}>
                        {product.availabilityStatus}
                    </span>
                </div>
            </div>
            <div className="px-4 py-2 bg-gray-700">
                <p className="text-sm text-gray-300 truncate">{product.description}</p>
            </div>
        </div>
    );
};

export default ProductCard;
