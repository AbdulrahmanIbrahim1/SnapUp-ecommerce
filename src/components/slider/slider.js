//for slider from react-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import { sliderImgs } from "../../utils/images";

function Myslider() {
  let settings = {
    autoplay: true,
    autoplayspeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <div className="slider">
        <Container >
          <div>
            <Slider {...settings}>
              <div className="slider-item">
                <img src={sliderImgs[0]} className="img-fluid" alt="" />
              </div>
              <div className="slider-item">
                <img src={sliderImgs[1]} className="img-fluid" alt="" />
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Myslider;