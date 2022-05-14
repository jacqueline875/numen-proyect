import React from "react";

const Mapa = () => {
  return (
    <div id="Contacto" >
      <p className="text-center  mb-10 text-3xl font-bold text-silver">
        Estamos aquí
      </p>
      <iframe title="ubicacion" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.3696072362345!2d-57.95484545650899!3d-34.92226628748677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x743e4011cae7ab24!2zMzTCsDU1JzIwLjIiUyA1N8KwNTcnMTAuOCJX!5e0!3m2!1ses-419!2sar!4v1652473243735!5m2!1ses-419!2sar"
        style={{ height: "60vh", width: "100%", llowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade" }}
      ></iframe>
    </div>
  );
};

export default Mapa;
