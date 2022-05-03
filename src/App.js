import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Redes from "./components/Redes";
import Carrito from "./components/Carrito";
import Carousel from "./components/Carousel";
import Banner from "./components/Banner";
import BannerPrincipal from "./components/BannerPrincipal";
import { products } from "./data"; 


const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x=>x.id === product.id);
    if (exist){
      setCartItems(cartItems.map(x=>x.id === product.id ? {...exist, qty:exist.qty + 1} : x ));
    } 
    else {
      setCartItems([...cartItems,{...product, qty:1}]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x)=> x.id === product.id);
    if(exist.qty ===1){
        setCartItems(cartItems.filter((x)=> x.id !== product.id));
    }
    else {
      setCartItems(cartItems.map(x=>x.id === product.id ? {...exist, qty:exist.qty - 1} : x ));
    }
  }
  return (   
    <div className="bg-gray-900">
      <NavBar  onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>        
      <BannerPrincipal/> 
      <p className="text-center mt-10 text-3xl font-bold text-silver">Productos </p>      
      <Cards onAdd={onAdd} products={products}/> 
      <Carrito onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/> 
      <p className="text-center mt-10 text-3xl font-bold text-silver">Ultimas Ofertas </p>  
      <Banner/>      
      <Carousel/> 
      <p className="text-center mt-10 text-3xl font-bold text-silver">Seguinos en </p> 
      <Redes/>        
      <Footer/> 
    </div>
  );
};

export default App;
