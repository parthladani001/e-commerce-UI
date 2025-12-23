const NewArrival = () => {
  const bgColorRed="bg-red-600";
const textColorRed="text-red-600";
    return (
      <section className="container mx-auto px-4 py-8 border-t border-border">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-5 h-10 ${bgColorRed} rounded`} />
          <span className={`${textColorRed} font-semibold`}>Featured</span>
        </div>
  
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-left">New Arrival</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
          {/* PlayStation */}
          <div className="relative bg-foreground text-background rounded overflow-hidden row-span-2">
            <img
              src="https://images.unsplash.com/photo-1615253067487-91c1bfb00643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FtaW5nJTIwbW91c2V8ZW58MHwyfDB8fHww"
              alt="PlayStation 5"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-semibold mb-2">PlayStation 5</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Black and White version of the PS5<br />coming out on sale.
              </p>
              <a href="#" className="text-sm border-b border-background pb-1 hover:opacity-80">
                Shop Now
              </a>
            </div>
          </div>
  
          {/* Women's Collections */}
          <div className="relative bg-foreground/90 text-background rounded overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=300&fit=crop"
              alt="Women's Collections"
              className="w-full h-100 object-cover"
            />
            <div className="absolute bottom-4 left-6">
              <h3 className="text-xl font-semibold mb-1">Women's Collections</h3>
              <p className="text-xs text-muted-foreground mb-2">
                Featured woman collections that<br />give you another vibe.
              </p>
              <a href="#" className="text-xs border-b border-background pb-1 hover:opacity-80">
                Shop Now
              </a>
            </div>
          </div>
  
          {/* Bottom Row */}
          <div className="grid grid-cols-2 gap-6">
            {/* Speakers */}
            <div className="relative bg-foreground text-background rounded overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop"
                alt="Speakers"
                className="w-full h-40 object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-semibold mb-1">Speakers</h3>
                <p className="text-xs text-muted-foreground mb-2">
                  Amazon wireless speakers
                </p>
                <a href="#" className="text-xs border-b border-background pb-1 hover:opacity-80">
                  Shop Now
                </a>
              </div>
            </div>
  
            {/* Perfume */}
            <div className="relative bg-foreground text-background rounded overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop"
                alt="Perfume"
                className="w-full h-40 object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-semibold mb-1">Perfume</h3>
                <p className="text-xs text-muted-foreground mb-2">
                  GUCCI INTENSE OUD EDP
                </p>
                <a href="#" className="text-xs border-b border-background pb-1 hover:opacity-80">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default NewArrival;
  