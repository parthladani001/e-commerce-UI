import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];
  const subtotal = cart.reduce((s, it) => s + it.price * it.quantity, 0);

  return (
    <div className="min-h-screen bg-white py-10 px-4 md:px-16 lg:px-24 font-sans text-black">
      <nav className="mb-6 text-sm text-gray-400">Account / My Account / Product / View Cart / <span className="font-medium text-black">CheckOut</span></nav>

      <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="space-y-4">
            <input className="w-full border border-gray-200 rounded-sm p-3" placeholder="First Name*" />
            <input className="w-full border border-gray-200 rounded-sm p-3" placeholder="Company Name" />
            <input className="w-full border border-gray-200 rounded-sm p-3" placeholder="Street Address*" />
            <input className="w-full border border-gray-200 rounded-sm p-3" placeholder="Apartment, floor, etc. (optional)" />
            <input className="w-full border border-gray-200 rounded-sm p-3" placeholder="Town/City*" />
            <input className="w-full border border-gray-200 rounded-sm p-3" placeholder="Phone Number*" />
            <input className="w-full border border-gray-200 rounded-sm p-3" placeholder="Email Address*" />
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              <span>Save this information for faster check-out next time</span>
            </label>
          </div>
        </div>

        <div>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-sm" />
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
                  </div>
                </div>
                <div className="font-medium">${item.price * item.quantity}</div>
              </div>
            ))}

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between text-sm mb-2"><span>Subtotal:</span><span>${subtotal}</span></div>
              <div className="flex justify-between text-sm mb-4"><span>Shipping:</span><span>Free</span></div>
              <div className="flex justify-between font-medium text-lg mb-4"><span>Total:</span><span>${subtotal}</span></div>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2"><input type="radio" name="pay" /> <span>Bank</span></label>
              <label className="flex items-center gap-2"><input type="radio" name="pay" defaultChecked /> <span>Cash on delivery</span></label>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <input className="border border-gray-300 px-3 py-2 rounded-sm flex-1" placeholder="Coupon Code" />
              <button className="bg-[#DB4444] text-white px-4 py-2 rounded-sm">Apply Coupon</button>
            </div>

            <div className="pt-4">
              <button
                className="bg-[#DB4444] text-white px-6 py-3 rounded-sm w-full"
                onClick={() => {
                  alert('Order placed (demo).');
                  navigate('/');
                }}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
