import React from "react";
import ItemsContainer from "./itemsContainers";

const Footer = () => {
  return (
    <footer className="text-white bg-gradient-to-l from-purple to-gray-900">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="mb-6 text-3xl font-semibold lg:text-4xl md:mb-0 lg:leading-normal md:w-2/5"
        >
          <span className="text-purple">Rsdf</span> sdfsdfsdf
          sdfsdf
        </h1>
      
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