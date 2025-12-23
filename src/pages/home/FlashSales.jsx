import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart, Eye } from "lucide-react";
import ProductCard from "./ProductCard.jsx";

const bgColorRed="bg-red-600";
const textColorRed="text-red-600";

const flashProducts = [
  {
    id: 13,
    name: "HAVIT HV-G92 Gamepad",
    image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop",
    price: 120,
    originalPrice: 160,
    discount: 40,
    rating: 5,
    reviews: 88,
  },
  {
    id: 14,
    name: "AK-900 Wired Keyboard",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop",
    price: 960,
    originalPrice: 1160,
    discount: 35,
    rating: 4,
    reviews: 75,
  },
  {
    id: 15,
    name: "IPS LCD Gaming Monitor",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop",
    price: 370,
    originalPrice: 400,
    discount: 30,
    rating: 5,
    reviews: 99,
  },
  {
    id: 16,
    name: "S-Series Comfort Chair",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=300&h=300&fit=crop",
    price: 375,
    originalPrice: 400,
    discount: 25,
    rating: 4,
    reviews: 99,
  },
];

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          days = 0;
          hours = 0;
          minutes = 0;
          seconds = 0;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-5 h-10 ${bgColorRed} rounded`} />
        <span className={`${textColorRed} font-semibold`}>Today's</span>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Flash Sales</h2>
          {/* <div className="flex items-center gap-4">
            <TimeBox label="Days" value={timeLeft.days} />
            <span className={`${textColorRed} text-2xl font-bold`}>:</span>
            <TimeBox label="Hours" value={timeLeft.hours} />
            <span className={`${textColorRed} text-2xl font-bold`}>:</span>
            <TimeBox label="Minutes" value={timeLeft.minutes} />
            <span className={`${textColorRed} text-2xl font-bold`}>:</span>
            <TimeBox label="Seconds" value={timeLeft.seconds} />
          </div> */}
        </div>
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
        {flashProducts.map((product) => (
          <ProductCard key={product.id} product={product} showDiscount />
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

const TimeBox = ({ label, value }) => (
  <div className="text-center">
    <span className="text-xs text-muted-foreground">{label}</span>
    <div className="text-2xl md:text-3xl font-bold">
      {String(value).padStart(2, "0")}
    </div>
  </div>
);

export default FlashSales;
