import ProductCard from "./ProductCard.jsx";

const bestSellingProducts = [
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
];
const bgColorRed="bg-red-600";
const textColorRed="text-red-600";

const BestSelling = () => {
  return (
    <section className="container mx-auto px-4 py-8 border-t border-border">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-5 h-10 ${bgColorRed} rounded`} />
        <span className={`${textColorRed} font-semibold`}>This Month</span>
      </div>

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Best Selling Products</h2>
        <button className={`${bgColorRed} text-white px-8 py-3 rounded hover:opacity-90`}>
          View All
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {bestSellingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestSelling;