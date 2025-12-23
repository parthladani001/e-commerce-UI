import { useState } from "react";
import { ChevronLeft, ChevronRight, Smartphone, Monitor, Watch, Camera, Headphones, Gamepad } from "lucide-react";


const categories = [
  { name: "Phones", icon: Smartphone, active: true },
  { name: "Computers", icon: Monitor },
  { name: "SmartWatch", icon: Watch },
  { name: "Camera", icon: Camera },
  { name: "HeadPhones", icon: Headphones },
  { name: "Gaming", icon: Gamepad },
];

// initial selected category (honor any category with `active: true`)
const initialSelected = categories.find((c) => c.active)?.name || null;

const Categories = () => {
  const bgColorRed = "bg-red-600";
  const textColorRed = "text-red-600";

  const [selected, setSelected] = useState(initialSelected);

  const selectedClasses = `${bgColorRed} text-white border-red-600 hover:bg-red-700`;
  const defaultClasses = "bg-background border-border hover:bg-red-600 hover:text-primary-foreground hover:text-white";

  return (
    <section className="container mx-auto px-4 py-8 border-t border-border">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-5 h-10 ${bgColorRed} rounded`} />
        <span className={`${textColorRed} font-semibold`}>Categories</span>
      </div>

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Browse By Category</h2>
        <div className="flex gap-2">
          <button className="p-2 bg-secondary rounded-full hover:bg-muted">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="p-2 bg-secondary rounded-full hover:bg-muted">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selected === category.name;
          return (
            <button
              key={category.name}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setSelected(category.name)}
              className={`flex flex-col items-center justify-center p-6 rounded border transition-colors ${
                isSelected ? selectedClasses : defaultClasses
              }`}
            >
              <Icon className="h-10 w-10 mb-3" />
              <span className="text-sm">{category.name}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
