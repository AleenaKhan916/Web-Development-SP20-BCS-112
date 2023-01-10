import ReactDOM from "react-dom/client";
import React from 'react';
import TopMenu from "./components/TopMenu";
import {BrowserRouter as Router, Route,RouterProvider,Routes,Navigate } from "react-router-dom"; //app compoent is rap 
import LandingPage from "./components/LandingPage";
import Products from "./components/products/Product";
import ContactUs from "./components/Contact";
import NotFound from "./components/NotFound";

function App() {
  
  return (
   
    <Router>
      <div>
        <TopMenu/>
        <Routes>
           
          <Route path="/products" element={<Products/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/not-found" element={<NotFound/>} />
          <Route path="/" element={<LandingPage/>} />
          <Route path="*" element={<NotFound/>} />
          
        </Routes>
      </div>
    </Router>
  )
}

export default App;
