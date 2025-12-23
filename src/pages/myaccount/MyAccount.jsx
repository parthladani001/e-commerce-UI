import React from 'react';

const MyAccount = () => {
  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 md:px-10 lg:px-24 font-sans text-black">

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-12 gap-4">
        <nav className="text-sm">
          <span className="text-gray-400">Home</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="font-medium">My Account</span>
        </nav>
        <div className="text-sm">
          Welcome! <span className="text-[#DB4444]">Name</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-1/4 space-y-8">
          <div>
            <h3 className="font-bold text-base mb-3">Manage My Account</h3>
            <ul className="pl-0 sm:pl-4 space-y-2 text-sm">
              <li className="text-[#DB4444] cursor-pointer">My Profile</li>
              <li className="text-gray-500 hover:text-[#DB4444] cursor-pointer transition-colors">Address Book</li>
              <li className="text-gray-500 hover:text-[#DB4444] cursor-pointer transition-colors">My Payment Options</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-3">My Orders</h3>
            <ul className="pl-0 sm:pl-4 space-y-2 text-sm text-gray-500">
              <li className="hover:text-[#DB4444] cursor-pointer transition-colors">My Returns</li>
              <li className="hover:text-[#DB4444] cursor-pointer transition-colors">My Cancellations</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-3 cursor-pointer">My WishList</h3>
          </div>
        </aside>

        <main className="w-full lg:w-3/4 bg-white shadow-[0_0_10px_rgba(0,0,0,0.05)] rounded-sm p-6 md:p-10 border border-gray-50">
          <h2 className="text-[#DB4444] text-lg md:text-xl font-medium mb-6">Edit Your Profile</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">First Name</label>
                <input 
                  type="text"   
                  placeholder='First Name'
                  className="bg-[#F5F5F5] p-3 rounded-sm focus:outline-none text-sm w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Last Name</label>
                <input 
                  type="text" 
                  placeholder='Last Name'
                  className="bg-[#F5F5F5] p-3 rounded-sm focus:outline-none text-sm w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Email</label>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-[#F5F5F5] p-3 rounded-sm focus:outline-none text-sm w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Address</label>
                <input 
                  type="text" 
                  placeholder="Address" 
                  className="bg-[#F5F5F5] p-3 rounded-sm focus:outline-none text-sm w-full"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <label className="text-sm font-medium">Password Changes</label>
              <input 
                type="password" 
                placeholder="Current Password" 
                className="bg-[#F5F5F5] p-3 rounded-sm focus:outline-none text-sm w-full"
              />
              <input 
                type="password" 
                placeholder="New Password" 
                className="bg-[#F5F5F5] p-3 rounded-sm focus:outline-none text-sm w-full"
              />
              <input 
                type="password" 
                placeholder="Confirm New Password" 
                className="bg-[#F5F5F5] p-3 rounded-sm focus:outline-none text-sm w-full"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-end items-center gap-3 mt-4 pt-4">
              <button type="button" className="text-sm font-medium hover:underline w-full sm:w-auto">Cancel</button>
              <button 
                type="submit" 
                className="bg-[#DB4444] text-white px-6 sm:px-12 py-3 sm:py-4 rounded-sm font-medium hover:bg-[#c13b3b] transition-colors w-full sm:w-auto"
              >
                Save Changes
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default MyAccount;