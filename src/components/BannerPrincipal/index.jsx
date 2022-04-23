import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import './styles.css'

const BannerPrincipal = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src="https://criticalhits.com.br/wp-content/uploads/2021/04/Charmander-Pokemon.jpg" />
          <p className="legend">Charmander</p>
        </div>
        <div>
          <img src="https://images.wikidexcdn.net/mwuploads/wikidex/e/ec/latest/20170919012759/EP985_Bulbasaur_de_Ash.png" />
          <p className="legend">Bulbasuar</p>
        </div>
        <div>
          <img src="https://alfabetajuega.com/hero/2021/09/pokemon-go-squirtle.jpg?width=1200&aspect_ratio=1200:631" />
          <p className="legend">Squirtle</p>
        </div>
      </Carousel>
    </div>
  );
};

export default BannerPrincipal;
