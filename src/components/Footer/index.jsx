import React from "react";
import ItemsContainer from "./itemsContainers";

const Footer = () => {
  return (
    <footer className="text-white bg-gradient-to-l from-purple to-gray-900">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="mb-6 text-3xl font-semibold lg:text-4xl md:mb-0 lg:leading-normal md:w-2/5"
        >
          <span className="text-purple">WEB</span>POWER
         
        </h1>
        <div>
          <input
            type="text"
            placeholder="Buscar"
            className="text-gray-800
          sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-purple py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800 duration-300  
            md:w-auto w-full"
          >
            Buscar
          </button>
        </div>
      
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 gap-10 pt-2 pb-8 text-sm text-center text-gray-400 sm:grid-cols-2 lg:grid-cols-3"
      >
        <span>© 2022 Todos los derechos reservados.</span>
        <span>Terms · Privacy Policy</span>
     
      </div>
    </footer>
  );
};

export default Footer;