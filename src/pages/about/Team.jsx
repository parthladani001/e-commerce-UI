import React, { useState, useRef } from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const teamMembers = [
  { name: "Tom Cruise", role: "Founder & Chairman", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" },
  { name: "Emma Watson", role: "Managing Director", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
  { name: "Will Smith", role: "Product Designer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
  { name: "Sarah Jenkins", role: "Marketing Lead", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" },
 
];

const TeamCard = ({ member }) => (
  <div className="flex-shrink-0 w-full  md:w-[calc(33.333%-1.5rem)] snap-start">
    <div className="bg-[#f4f4f4] aspect-square overflow-hidden mb-4">
      <img 
        src={member.image} 
        alt={member.name} 
        className="w-full h-full object-cover "
      />
    </div>
    <div className="text-left space-y-1">
      <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>
      <p className="text-sm text-gray-600 mb-3">{member.role}</p>
      <div className="flex gap-3 text-gray-800">
        <Twitter size={18} className="cursor-pointer" />
        <Instagram size={18} className="cursor-pointer" />
        <Linkedin size={18} className="cursor-pointer" />
      </div>
    </div>
  </div>
);

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const width = e.target.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  return (
    <section className="bg-white py-20 px-10 p-5">
      <div className="max-w-7xl mx-auto">
        
        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>

        {/* Carousel Indicators (Dots) */}
        <div className="flex justify-center gap-2 mt-2">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-red-500 w-3' : 'bg-gray-300'
              }`}
              onClick={() => {
                const container = scrollRef.current;
                container.scrollTo({
                  left: index * (container.offsetWidth / (window.innerWidth > 768 ? 3 : 1)),
                  behavior: 'smooth'
                });
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;