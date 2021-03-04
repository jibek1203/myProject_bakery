import React, { Component } from "react";
import { Carousel, Image } from 'react-bootstrap';
import './Order.css';
import LightSpeed from 'react-reveal/LightSpeed';
import Flip from 'react-reveal/Flip';

export default class MultipleItems extends Component {
  render() {
    return (
      <div className="section_3">
        <div className="order_title">
          <LightSpeed top cascade>

            <h2> order online </h2>
          </LightSpeed>
        </div>
        <div className="order_items">

          <Carousel >
            <Carousel.Item interval={1000} style={{ width: '100%', height: '500px' }} >
              <Image fluid
                className="d-block w-100"
                src="https://www.trenker.com/CustomerData/552/Files/Images/produkte/halbbackwaren/header.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h1 style={{ fontSize: '40px', fontFamily: 'Alex Brush cursive' }}>Ecological Ingredients</h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500} style={{ width: '100%', height: '500px' }}>
              <Image fluid
                className="d-block w-100"
                src="https://cms.enjourney.ru/upload/Jana/Italia/Attraction/Gilli1.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h1 style={{ fontSize: '40px', fontFamily: 'Alex Brush cursive' }}>Tasty and Delicious</h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ width: '100%', height: '500px' }}>
              <Image fluid
                className="d-block w-100"
                src="http://alicias.ca/wp-content/uploads/2018/09/fresh-bakery.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="products">
        <Flip bottom cascade>
          <h1>Michelle`s Products for you</h1>
        </Flip>
        </div>
      </div>

    );
  }
}