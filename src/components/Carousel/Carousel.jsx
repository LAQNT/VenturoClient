import Carousel from "react-bootstrap/Carousel";

import hero1 from "../../assets/imgs/hero1.jpg";
import hero2 from "../../assets/imgs/hero2.jpg";
import hero3 from "../../assets/imgs/hero3.jpg";
import hero4 from "../../assets/imgs/hero4.jpg";

import "./carousel.css";

function CarouselHome() {
  return (
    <Carousel fade>
      <Carousel.Item className="carousel">
        <img className="d-block w-100" src={hero1} alt="First slide" />
        <Carousel.Caption>
          <p>Valle del Cocora, Colombia</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel">
        <img className="d-block w-100" src={hero2} alt="Second slide" />

        <Carousel.Caption>
          <p>Osaka, Japan</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel">
        <img className="d-block w-100" src={hero3} alt="Third slide" />

        <Carousel.Caption>
          <p>Patagonia, Chile</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel">
        <img className="d-block w-100" src={hero4} alt="Third slide" />

        <Carousel.Caption>
          <p>Rio di Janeiro, Brasil</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
