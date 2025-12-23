import React, { useState } from 'react';
import { Trash2, ShoppingCart, Eye, Star } from 'lucide-react';
import ProductCard from '../home/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../../features/wishlist/wishlistSlice';
import { addToCart } from '../../features/cart/CartSlice';

const Wishlist = () => {

  const dispatch = useDispatch();
  const wishlistItems=useSelector((state)=>state.wishlist.items);
  const recommendations = [
    { 
      id: 21, 
      name: "ASUS FHD Gaming Laptop", 
      price: 960, 
      oldPrice: 1160, 
      discount: "-35%", 
      rating: 5, 
      reviews: 65, 
      image: "https://images.unsplash.com/photo-1636211989567-fd3ada526ea0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFzdXMlMjBsYXB0b3AlMjBtb2NrdXB8ZW58MHx8MHx8fDA%3D", 
      isNew: false 
    },
    { 
      id: 22, 
      name: "IPS LCD Gaming Monitor", 
      price: 1160, 
      rating: 5, 
      reviews: 65, 
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800", 
      isNew: false 
    },
    { 
      id: 23, 
      name: "HAVIT HV-G92 Gamepad", 
      price: 560, 
      rating: 5, 
      reviews: 65, 
      image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGdhbWUlMjBwYWR8ZW58MHx8MHx8fDA%3D", 
      isNew: true 
    },
    { 
      id: 24, 
      name: "AK-900 Wired Keyboard", 
      price: 200, 
      rating: 5, 
      reviews: 65, 
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=800", 
      isNew: false 
    },
  ];

  const removeItem = ({ id, name, price, image }) => {
    dispatch(removeFromWishlist({ id, name, price, image }));
  };
  
  const moveAllToBag = () => {
    wishlistItems.forEach((item) => {
      dispatch(addToCart({ id: item.id, name: item.name, price: item.price, image: item.image}));
      dispatch(removeFromWishlist({ id: item.id, name: item.name, price: item.price, image: item.image}));
    })};

  return (
    <div className="min-h-screen bg-white py-10 px-4 md:px-16 lg:px-24 font-sans text-black">
      
      {/* --- Wishlist Header --- */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-xl font-normal">Wishlist ({wishlistItems.length})</h2>
        <button
          onClick={()=>moveAllToBag()}
        className="border border-black px-10 py-4 rounded-sm font-medium hover:bg-gray-50 transition-colors hover:bg-red-600 hover:text-white">
          Move All To Bag
        </button>
      </div>

      {/* --- Wishlist Grid --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {wishlistItems.length === 0 ? (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500">Your wishlist is empty</p>
          </div>
        ) : (
          wishlistItems.map((item) => (
            <Product key={item.id} item={item} type="wishlist" onAction={() => removeItem({ id: item.id, name: item.name, price: item.price, image: item.image})} />
          ))
        )}
      </div>

      {/* --- Recommendations Header --- */}
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
          <h2 className="text-xl font-normal ">Just For You</h2>
        </div>
        <button className="border border-black px-10 py-4 rounded-sm font-medium hover:bg-red-600 hover:text-white transition-colors">
          See All
        </button>
      </div>

      {/* --- Recommendations Grid --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {recommendations.map((item) => (
        //   <ProductCard key={item.id} item={item} type="recommendation" />
          <ProductCard key={item.id} product={item}  />
        ))}
      </div>
    </div>
  );
};

const Product = ({ item, type, onAction }) => {
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    dispatch(addToCart({ id: item.id, name: item.name, price: item.price, image: item.image}));
  dispatch(removeFromWishlist({ id: item.id, name: item.name, price: item.price, image: item.image}));
  };
  return (
    <div className="group flex flex-col h-full">
      <div className="relative  rounded-sm aspect-square overflow-hidden">
        {item.discount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-[12px] px-3 py-1 rounded-sm">
            {item.discount}
          </span>
        )}
        {item.isNew && (
          <span className="absolute top-3 left-3 bg-[#00FF66] text-black text-[12px] px-3 py-1 rounded-sm">
            NEW
          </span>
        )}

        <button 
          onClick={onAction}
          className="absolute top-3 right-3 z-20 bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors "
        >
          {type === 'wishlist' ? <Trash2 size={18} /> : <Eye size={18} />}
        </button>

        {/* image fills the whole square */}
        <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply z-0" />

        {/* Add To Cart Overlay */}
        <button 
          onClick={
             () => addItemToCart({ id: item.id, name: item.name, price: item.price, image: item.image })}
          className="absolute bottom-0 w-full bg-black text-white py-2 flex items-center justify-center gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity z-10">
          <ShoppingCart size={18} />
          <span className="text-xs">Add To Cart</span>
        </button>
      </div>

      {/* Text Info */}
      <div className="mt-4 space-y-1">
        <h3 className="font-medium text-base truncate">{item.name}</h3>
        <div className="flex items-center gap-3">
          <span className="text-[#DB4444] font-medium">${item.price}</span>
          {item.oldPrice && <span className="text-gray-400 line-through">${item.oldPrice}</span>}
        </div>
        
        {/* Rating for Recommendations */}
        {type === 'recommendation' && (
          <div className="flex items-center gap-2 mt-1">
            <div className="flex text-[#FFAD33]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill={i < item.rating ? "currentColor" : "none"} />
              ))}
            </div>
            <span className="text-gray-400 text-xs font-semibold">({item.reviews})</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;