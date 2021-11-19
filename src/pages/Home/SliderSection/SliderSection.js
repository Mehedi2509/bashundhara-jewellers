import React from 'react';
import './SliderSection.css';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../images/sliders/slider1.jpg';
import slider2 from '../../../images/sliders/slider2.jpg';
import slider3 from '../../../images/sliders/slider3.jpg';

const SliderSection = () => {
    return (

        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className="slider-caption1 text-start">
                        <h2>Shop Fashion & <br />Fine Jewelry</h2>
                        <p>Save 70% off discount on <br />clearance jewelry</p>
                        <button className="slider-btn">Shop</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div className="slider-caption2 text-start">
                        <h2>Designer Jewelry For Women</h2>
                        <p>Find great deals on new jewelry,including rings,necklace & bracelets.</p>
                        <button className="slider-btn">Shop</button>
                    </div>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <div className="slider-caption3 text-start">
                        <h2>Jewelry Sales<br /> Ends in 2 Days</h2>
                        <p>Online Jewelry Store! Get 5% in rewards</p>
                        <button className="slider-btn">Shop</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
};

export default SliderSection;