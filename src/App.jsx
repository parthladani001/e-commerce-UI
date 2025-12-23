import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import SignUp from './pages/auth/Signup.jsx'
import Login from './pages/auth/Login.jsx'
import Home from './pages/home/index.jsx'
import About from './pages/about/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Cart from './pages/cart/Cart.jsx'
import NotFound from './pages/notFound/NotFound.jsx'
import MyAccount from './pages/myaccount/MyAccount.jsx'
import Wishlist from './pages/wishlist/Wishlist.jsx'
import ProductDetail from './pages/product/ProductDetail.jsx'
import Checkout from './pages/checkout/Checkout.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            
              <Home />
            }
        />
        <Route path='contact' element={<Contact />} />

        <Route path='about' element={<About />} />
        
        <Route
          path="signup"
          element={
            
              <SignUp />
          }
        />
        <Route
          path="login"
          element={
            
              <Login />
          }
        />
        <Route path="*" element={<NotFound/>} />
        <Route path='cart' element={<Cart />} />
  <Route path='product/:id' element={<ProductDetail />} />
  <Route path='checkout' element={<Checkout />} />
        <Route path="myaccount" element={<MyAccount/>}/>
        <Route path='wishlist' element={<Wishlist />} />

      </Route>
    </Routes>
  )
}

export default App
