import React from 'react';
import { Heart, Eye, Star } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCart } from '../../features/cart/CartSlice';
import { addToWishlist } from '../../features/wishlist/wishlistSlice';

const ProductCard = ({ product, showDiscount = false }) => {
  const bgColorRed = "bg-red-600";
  const textColorRed = "text-red-600";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="group">
      <div className="relative bg-secondary rounded overflow-hidden mb-3">
        {showDiscount && product.discount && (
          <span className={`absolute top-2 left-2 ${bgColorRed} text-white text-primary-foreground text-xs px-2 py-1 rounded`}>
            -{product.discount}%
          </span>
        )}
        <div className="absolute top-2 right-2 flex flex-col gap-2 z-20">
          <button 
          onClick={() => dispatch(addToWishlist({ id: product.id, name: product.name, price: product.price, image: product.image}))}
          className="p-2 bg-background rounded-full hover:bg-red-600 hover:text-white">
            <Heart className="h-4 w-4" />
          </button>
          <button 
          onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
          className="p-2 bg-background rounded-full hover:bg-muted hover:text-white hover:bg-red-600">
            <Eye className="h-4 w-4" />
          </button>
        </div>
        <div className="relative aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <button 
          onClick={() => dispatch(addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 }))}
        className=" absolute bottom-0 left-0 right-0 bg-foreground text-background py-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity group-hover:bg-gray-800 group-hover:text-white">
          Add To Cart
        </button>
      </div>
      <h3 className="font-medium mb-1 text-sm">{product.name}</h3>
      <div className="flex items-center gap-2 mb-1">
        <span className={`${textColorRed} font-semibold`}>${product.price}</span>
        {product.originalPrice && (
          <span className="text-muted-foreground line-through text-sm">
            ${product.originalPrice}
          </span>
        )}
      </div>
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < product.rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-muted text-muted"
            }`}
          />
        ))}
        <span className="text-muted-foreground text-sm ml-1">
          ({product.reviews})
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
