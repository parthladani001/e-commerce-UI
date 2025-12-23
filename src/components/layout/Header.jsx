import { Search, Heart, ShoppingCart, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-border">

      <div className="bg-foreground text-background text-center py-2 text-sm bg-gray-800">
        <span className="text-white">Winter Sale For All Winter Suits And Free Express Delivery - OFF 50%!</span>
        <a href="#" className="text-white ml-2 font-semibold underline">ShopNow</a>
      </div>


      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold">Exclusive</a>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `pb-1 hover:text-red-600 ${isActive ? 'text-red-600 border-b-2 border-red-600' : 'text-inherit hover:text-primary'}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `pb-1 hover:text-red-600 ${isActive ? 'text-red-600 border-b-2 border-red-600' : 'text-inherit hover:text-primary'}`
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `pb-1 hover:text-red-600 ${isActive ? 'text-red-600 border-b-2 border-red-600' : 'text-inherit hover:text-primary'}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `pb-1 hover:text-red-600 ${isActive ? 'text-red-600 border-b-2 border-red-600' : 'text-inherit hover:text-primary'}`
            }
          >
            Sign Up
          </NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-secondary rounded px-3 py-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent outline-none text-sm w-48"
            />
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              `p-2 rounded ${isActive ? 'bg-red-600 text-white rounded-full' : 'hover:bg-secondary'}`
            }
            aria-label="Wishlist"
          >
            <Heart className="h-5 w-5" />
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `p-2 rounded ${isActive ? 'bg-red-600 text-white rounded-full' : 'hover:bg-secondary'}`
            }
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </NavLink>

          <NavLink
            to="/myaccount"
            className={({ isActive }) =>
              `p-2 rounded ${isActive ? 'bg-red-600 text-white rounded-full' : 'hover:bg-secondary'}`
            }
            aria-label="My Account"
          >
            <User className="h-5 w-5" />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
