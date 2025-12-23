import { Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          
          <div>
            <h3 className="text-xl font-bold mb-3">Exclusive</h3>
            <p className="text-sm mb-2">Subscribe</p>
            <p className="text-sm text-muted-foreground mb-4">Get 10% off your first order</p>
            <div className="flex flex-row sm:flex-row items-stretch sm:items-center gap-2 border border-muted-foreground rounded p-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-2 py-2 text-sm outline-none w-full sm:flex"
              />
              <button className="p-2 flex-shrink-0">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold mb-3">Account</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="" className="hover:text-background">My Account</a></li>
              <li><a href="#" className="hover:text-background">Login / Register</a></li>
              <li><a href="#" className="hover:text-background">Cart</a></li>
              <li><a href="#" className="hover:text-background">Wishlist</a></li>
              <li><a href="#" className="hover:text-background">Shop</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Quick Link</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-background">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background">Terms Of Use</a></li>
              <li><a href="#" className="hover:text-background">FAQ</a></li>
              <li><a href="#" className="hover:text-background">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Download App</h3>
            <p className="text-xs text-muted-foreground mb-3">Save $3 with App New User Only</p>
            <div className="flex gap-2 mb-4 items-center">
              <div className="w-16 h-12 sm:w-20 sm:h-20 bg-muted rounded bg-gray-200" />
              <div className="space-y-2">
                <div className="bg-muted rounded px-3 py-1 text-xs border border-gray-300">Google Play</div>
                <div className="bg-muted rounded px-3 py-1 text-xs border border-gray-300">App Store</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:opacity-80">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="hover:opacity-80">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="hover:opacity-80">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" className="hover:opacity-80">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-muted-foreground/20 mt-12 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © Copyright Exclusive 2025. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
