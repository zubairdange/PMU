import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Img from "../Landing/c1.jpg";
import Img1 from "../Landing/c2.jpg";
import Img2 from "../Landing/c3.jpg";
import Img3 from "../Landing/c4.jpg";
import Img4 from "../Landing/c5.jpg";
import Img5 from "../Landing/c6.jpg";
export const Mycarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            // className="d-block w-100"
            width={1500}
            height={500}
            alt="900x500"
            src={Img}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1500} height={500} src={Img1} alt="Third slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1500} height={500} src={Img2} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1500} height={500} src={Img3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1500} height={500} src={Img4} alt="Third slide" />

          <Carousel.Caption>
            <h3>Fifth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1500} height={500} src={Img5} alt="Third slide" />

          <Carousel.Caption>
            <h3>Sixth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
