import { useState } from 'react';

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  materialTags: string[];
  isInWishlist: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  return (
    <div className="group relative overflow-hidden border border-gray-200 rounded-lg bg-white hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="aspect-w-4 aspect-h-3 bg-gray-50">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        {/* Wishlist button */}
        <button
          className="absolute top-2 right-2 p-2 rounded hover:bg-gray-200"
          aria-label={product.isInWishlist ? 'Odstrani iz želja' : 'Dodaj v želja'}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          {product.isInWishlist && (
            <svg className="h-5 w-5 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          )}
        </button>
        {/* Quick add to cart button on hover */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <button
              onClick={() => setIsAdded(true)}
              className="px-4 py-2 bg-terracotta text-white font-medium rounded hover:bg-terracotta/90 transition-colors"
            >
              {isAdded ? 'Dodano' : 'Hitro dodaj'}
            </button>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-2">{product.title}</h3>
        {/* Material tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {product.materialTags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-terracotta/10 text-terracotta rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-xl font-bold text-terracotta mb-4">
          {product.price.toFixed(2)} €
        </p>
      </div>
    </div>
  );
}