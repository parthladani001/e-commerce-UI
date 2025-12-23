import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../features/cart/cartSlice.jsx';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems=useSelector((state)=>state.cart.items||[]);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const navigate = useNavigate();

  const increaseQty = (id) => {
    dispatch({ type: "cart/incrementQuantity", payload: id });
  };

  const decreaseQty = (id, qty) => {
    if ((qty ?? 1) > 1) {
      dispatch({ type: "cart/decrementQuantity", payload: id });
    } else {
      dispatch(removeFromCart(id));
    }
  };

  return (
    <div className="min-h-screen bg-white py-10 px-4 md:px-16 lg:px-24 font-sans text-black">

      <nav className="mb-10 text-sm">
        <span className="text-gray-400">Home</span>
        <span className="mx-2 text-gray-400">/</span>
        <span className="font-medium">Cart</span>
      </nav>

      {/* Cart Table Header - Hidden on Mobile */}
      <div className="hidden md:grid grid-cols-4 bg-white shadow-sm border border-gray-50 rounded-sm p-6 mb-10 font-medium">
        <div>Product</div>
        <div className="text-center">Price</div>
        <div className="text-center">Quantity</div>
        <div className="text-right">Subtotal</div>
      </div>

      {/* Cart Items */}
      <div className="space-y-8 mb-10">
        
        {cartItems.length === 0 ? (
          <div className="p-6 text-center text-sm text-gray-500">
            Your cart is empty
          </div>
        ) : (
        cartItems.map((item) => (
          <div key={item.id} className="relative grid grid-cols-1 md:grid-cols-4 items-center bg-white shadow-sm border border-gray-50 rounded-sm p-6 gap-4">

            <button 
            onClick={()=>dispatch(removeFromCart(item.id))}
            className="absolute -top-2 -left-2 bg-[#DB4444] text-white rounded-full p-1 shadow-md">
              <X size={12} />
            </button>

            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-12 h-12 object-contain" />
              <span className="font-medium">{item.name}</span>
            </div>

            <div className="flex justify-between md:justify-center">
              <span className="md:hidden text-gray-500">Price:</span>
              <span>${item.price}</span>
            </div>

            <div className="flex justify-between md:justify-center">
              <span className="md:hidden text-gray-500">Quantity:</span>
              <div className="inline-flex items-center border rounded-md overflow-hidden">
                            <button
                              onClick={() =>
                                decreaseQty(item.id, item.quantity)
                              }
                              className="px-2 py-1 text-sm bg-white hover:bg-gray-50 focus:outline-none"
                              aria-label={`Decrease quantity of ${item.name}`}
                            >
                              −
                            </button>
                            <div className="px-3 py-1 text-sm bg-gray-50">{item.quantity ?? 1}</div>
                            <button
                              onClick={() => increaseQty(item.id)}
                              className="px-2 py-1 text-sm bg-white hover:bg-gray-50 focus:outline-none"
                              aria-label={`Increase quantity of ${item.name}`}
                            >
                              +
                            </button>
                          </div>
            </div>
            {/* Subtotal */}
            <div className="flex justify-between md:justify-end font-medium">
              <span className="md:hidden text-gray-500">Subtotal:</span>
              <span>${item.price * item.quantity}</span>
            </div>
          </div>
        )))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-20">
        <button className="border border-black px-12 py-4 rounded-sm font-medium hover:bg-red-600 hover:text-white transition-colors">
          Return To Shop
        </button>
        <button className="border border-black px-12 py-4 rounded-sm font-medium hover:bg-red-600 hover:text-white transition-colors">
          Update Cart
        </button>
      </div>

      {/* Bottom Section: Coupon & Cart Total */}
     {!cartItems.length==0 && <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Coupon Section */}
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          <input 
            type="text" 
            placeholder="Coupon Code" 
            className="border border-black px-6 py-4 rounded-sm w-full sm:w-72 focus:outline-none"
          />
          <button className="bg-[#DB4444] text-white px-12 py-4 rounded-sm font-medium hover:bg-[#c13b3b] transition-colors whitespace-nowrap">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total Box */}
        <div className="border-2 border-black  rounded-sm p-8 w-full lg:w-96">
          <h3 className="text-xl font-medium mb-6">Cart Total</h3>
          
          <div className="flex justify-between py-3 border-b border-gray-300 text-sm">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          
          <div className="flex justify-between py-3 border-b border-gray-300 text-sm">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          
          <div className="flex justify-between py-4 text-sm font-medium">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>

          <div className="flex justify-center mt-4">
            <button
              className="bg-[#DB4444] text-white px-10 py-4 rounded-sm font-medium hover:bg-[#c13b3b] transition-colors w-full lg:w-auto"
              onClick={() => navigate('/checkout', { state: { cart: cartItems } })}
            >
              Procees to checkout
            </button>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default Cart;
