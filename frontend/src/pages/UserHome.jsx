import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


function DarkVariantExample() {
  return (
    <>
    <Carousel data-bs-theme="dark" className="full-width-carousel carol">
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src="/boat.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='carousal-caption'>
          <h5>Excise Department of Kerala</h5>
          <p>This image heading is replacable</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src="/yumuri-river-matanzas-cuba-with-calm-water-gentle-sky-tall-hills.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className='carousal-caption'>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src="/1063.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className='carousal-caption'>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <button className="explore-btn">
  Explore <FontAwesomeIcon icon={faArrowRight} />
</button>

    </>
  );
}

export default DarkVariantExample;
