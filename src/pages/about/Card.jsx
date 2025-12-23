import React from 'react'
import { Store, DollarSign, ShoppingBag, CircleDollarSign, Smartphone } from "lucide-react";

// const categories = [
//     { name: "Phones", icon: Smartphone, active: true },
//     { name: "Computers", icon: Monitor },
//     { name: "SmartWatch", icon: Watch },
//     { name: "Camera", icon: Camera },

//   ];
  const services = [
    {
      icon: Store,
      title: "FREE AND FAST DELIVERY",
      count: "10.5K",
      description: "Sellers active on our site",
    },
    {
      icon: DollarSign,
      title: "24/7 CUSTOMER SERVICE",
      count: "8.9K",
      description: "Monthly product sales",
    },
    {
      icon: ShoppingBag,
      title: "MONEY BACK GUARANTEE",
      count: "4.5K",
      description: "Customers active on our site",
    },
    {
      icon: CircleDollarSign,
      title: "ANNUAL SALES",
      count: "45K",
      description: "Annual gross sales on our site",
    },
  ];

  function Card() {
    return (
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <article
                  key={idx}
                  className="flex flex-col items-center md:items-center text-center md:text-left p-6 rounded border bg-background border-border hover:bg-red-600 hover:text-white transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4 bg-gray-300">
                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center bg-gray-900">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold mt-1">{service.count}</div>
                  <p className="text-sm mt-2 text-muted-foreground">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  export default Card