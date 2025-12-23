import React, { useState, useEffect } from 'react';
import { Star, Heart, Truck, RotateCcw, ShoppingCart, Eye } from 'lucide-react';
import { useLocation, useParams } from 'react-router-dom';
import ProductCard from '../home/ProductCard';

const ProductDetail = ({ product }) => {
    console.log(product);
  const location = useLocation();
  const params = useParams();
  const resolvedProduct = product || location.state?.product;
  if (!resolvedProduct) return <div className="p-20 text-center">Product not found</div>;
  console.log(resolvedProduct);
  const [selectedImage, setSelectedImage] = useState(resolvedProduct.image );
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('blue');

  useEffect(() => {
    setSelectedImage(resolvedProduct.image);
    setQuantity(1);
    setSelectedSize('M');
    setSelectedColor('blue');

    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [resolvedProduct]);

  const relatedProducts = [
    {
      id: 1,
      name: "The north coat",
      image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=300&h=300&fit=crop",
      price: 260,
      originalPrice: 360,
      rating: 5,
      reviews: 65,
    },
    {
      id: 2,
      name: "Gucci duffle bag",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=300&fit=crop",
      price: 960,
      originalPrice: 1160,
      rating: 4,
      reviews: 65,
    },
    {
      id: 3,
      name: "RGB liquid CPU Cooler",
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=300&h=300&fit=crop",
      price: 160,
      originalPrice: 170,
      rating: 4,
      reviews: 65,
    },
    {
      id: 4,
      name: "Small BookShelf",
      image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=300&h=300&fit=crop",
      price: 360,
      rating: 5,
      reviews: 65,
    },
  ];;

  if (!resolvedProduct) return <div className="p-20 text-center">Product not found</div>;

  return (
    <div className="min-h-screen bg-white py-10 px-4 md:px-16 lg:px-24 font-sans text-black">
      {/* Breadcrumb */}
      <nav className="mb-10 text-sm text-gray-400">
        Account / Gaming / <span className="text-black font-medium">{resolvedProduct.name}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-12 mb-20">
        <div className="flex flex-col-reverse md:flex-row gap-4 lg:w-2/3">
          <div className="flex md:flex-col gap-4 overflow-x-auto">
            
            <img src={selectedImage} alt={resolvedProduct.name} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="lg:w-1/3 space-y-6">
          <h1 className="text-2xl font-semibold tracking-wide">{resolvedProduct.name}</h1>
          
          <div className="flex items-center gap-4 text-sm">
            <div className="flex text-[#FFAD33]">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={i < resolvedProduct.rating ? "currentColor" : "none"} />)}
            </div>
            <span className="text-gray-400">({resolvedProduct.reviews} Reviews)</span>
            <span className="text-gray-300">|</span>
            <span className="text-[#00FF66]">In Stock</span>
          </div>

          <div className="text-2xl font-normal">${resolvedProduct.price.toFixed(2)}</div>

          <p className="text-sm leading-relaxed border-b border-gray-300 pb-6">
            {resolvedProduct.description || ""}
          </p>

          <div className="space-y-6 pt-2">
            <div className="flex items-center gap-4">
              <span className="text-xl">Colours:</span>
              <div className="flex gap-2">
                <button 
                  className={`w-5 h-5 rounded-full bg-[#A0BCE0] border-2 ${selectedColor === 'blue' ? 'border-black ring-1 ring-offset-1 ring-black' : 'border-transparent'}`}
                  onClick={() => setSelectedColor('blue')}
                />
                <button 
                  className={`w-5 h-5 rounded-full bg-[#E07575] border-2 ${selectedColor === 'red' ? 'border-black ring-1 ring-offset-1 ring-black' : 'border-transparent'}`}
                  onClick={() => setSelectedColor('red')}
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xl">Size:</span>
              <div className="flex gap-4">
                {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-8 h-8 flex items-center justify-center border rounded-md text-sm font-medium transition-all ${selectedSize === size ? 'bg-[#DB4444] border-[#DB4444] text-white' : 'border-gray-300 hover:border-black'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Purchase Actions */}
          <div className="flex gap-4 pt-4">
            <div className="flex items-center border border-gray-400 rounded-md overflow-hidden">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-gray-100 border-r border-gray-400 text-2xl font-light">−</button>
              <div className="px-6 py-2 font-medium min-w-[60px] text-center">{quantity}</div>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 bg-[#DB4444] text-white text-2xl font-light hover:bg-[#c13b3b]">+</button>
            </div>
            <button className="flex-grow bg-[#DB4444] text-white font-medium py-2 rounded-md hover:bg-[#c13b3b] transition-colors">
              Buy Now
            </button>
            <button className="p-2 border border-gray-400 rounded-md hover:border-black transition-colors">
              <Heart size={24} />
            </button>
          </div>

          {/* Delivery Info Box */}
          <div className="border border-gray-400 rounded-md mt-10">
            <div className="flex items-center gap-4 p-4 border-b border-gray-400">
              <Truck size={32} />
              <div>
                <p className="font-medium">Free Delivery</p>
                <p className="text-xs underline cursor-pointer">Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <RotateCcw size={32} />
              <div>
                <p className="font-medium">Return Delivery</p>
                <p className="text-xs">Free 30 Days Delivery Returns. <span className="underline cursor-pointer">Details</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items Section */}
      <div>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
          <h2 className="text-[#DB4444] font-semibold">Related Item</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map(item => (
            <ProductCard key={item.id} product={item} showDiscount/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;