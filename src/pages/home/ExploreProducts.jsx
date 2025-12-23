import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard.jsx";

const exploreProducts = [
  {
    id: 5,
    name: "Breed Dry Dog Food",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=300&h=300&fit=crop",
    price: 100,
    rating: 3,
    reviews: 35,
  },
  {
    id: 6,
    name: "CANON EOS DSLR Camera",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=300&fit=crop",
    price: 360,
    rating: 4,
    reviews: 95,
  },
  {
    id: 7,
    name: "ASUS FHD Gaming Laptop",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&h=300&fit=crop",
    price: 700,
    rating: 5,
    reviews: 325,
  },
  {
    id: 8,
    name: "Curology Product Set",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop",
    price: 500,
    rating: 4,
    reviews: 145,
  },
  {
    id: 9,
    name: "Kids Electric Car",
    image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=300&h=300&fit=crop",
    price: 960,
    rating: 5,
    reviews: 65,
    isNew: true,
  },
  {
    id: 10,
    name: "Jr. Zoom Soccer Cleats",
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=300&h=300&fit=crop",
    price: 1160,
    rating: 5,
    reviews: 35,
  },
  {
    id: 11,
    name: "GP11 Shooter USB Gamepad",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300&h=300&fit=crop",
    price: 660,
    rating: 4,
    reviews: 55,
    isNew: true,
  },
  {
    id: 12,
    name: "Quilted Satin Jacket",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=300&fit=crop",
    price: 660,
    rating: 4,
    reviews: 55,
  },
];
const bgColorRed="bg-red-600";
const textColorRed="text-red-600";

const ExploreProducts = () => {
  return (
    <section className="container mx-auto px-4 py-8 border-t border-border">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-5 h-10 ${bgColorRed} rounded`} />
        <span className={`${textColorRed} font-semibold`}>Our Products</span>
      </div>

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Explore Our Products</h2>
        <div className="flex gap-2">
          <button className="p-2 bg-secondary rounded-full hover:bg-muted">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="p-2 bg-secondary rounded-full hover:bg-muted">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {exploreProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-8">
        <button className={`${bgColorRed} text-white px-12 py-3 rounded hover:opacity-90`}>
          View All Products
        </button>
      </div>
    </section>
  );
};

export default ExploreProducts;
