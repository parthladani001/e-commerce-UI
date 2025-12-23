import { ChevronRight } from "lucide-react";

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const HeroBanner = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* Sidebar Categories */}
        <aside className="hidden lg:block w-56 border-r border-border pr-4">
          <ul className="space-y-3">
            {categories.map((category) => (
              <li key={category}>
                <a
                  href="#"
                  className="flex items-center justify-between text-sm hover:text-primary"
                >
                  {category}
                  {(category === "Woman's Fashion" || category === "Men's Fashion") && (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Hero Banner */}
        <div className="bg-gray-900 text-white flex-1 bg-foreground text-background rounded-sm overflow-hidden">
          <div className="flex items-center justify-between p-8 md:p-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className="text-sm">iPhone 15 Series</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                Up to 10%<br />off Voucher
              </h2>
              <a
                href="#"
                className="inline-flex items-center gap-2 border-b border-background pb-1 hover:opacity-80"
              >
                Shop Now
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1695822919033-f87120df28de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vY2t1cCUyMGlwaG9uZXxlbnwwfDJ8MHx8fDA%3D"
                alt="iPhone"
                className="w-64 h-64 object-contain"
              />
            </div>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 pb-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full ${i === 2 ? "bg-primary" : "bg-muted-foreground/50"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
