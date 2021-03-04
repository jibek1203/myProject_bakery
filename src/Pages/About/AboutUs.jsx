import React from 'react';
import { Element, Link as Scroll } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-bootstrap/Carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './About.css';
import LightSpeed from 'react-reveal/LightSpeed';

const useStyles = makeStyles((theme) => ({
    subtitle: {
        color: '#544322',
        fontSize: '22px',
        width: '80%',
        fontFamily: 'Caudex, serif',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '80px'
    },
    carousel: {
        width: '200%',
        marginRight: '75px',
        flexWrap: "wrap"
    },
}));
export default function AboutUs() {
    const classes = useStyles();
    return (
        <div className="section_2">
            <div className="title">
                <LightSpeed top cascade>
                    <h1 className={classes.title} style={{ margin: '75px 25px', fontSize: '40px' }}>always something special</h1>
                </LightSpeed >
            </div>

            <Element className="about">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ width: '230%', marginLeft: '25px' }}>

                        <p className={classes.subtitle}> 
                        Мы предлагаем не просто свежую выпечку, великолепные торты, нежнейшие десерты и изысканные пирожные, а кондитерские изделия, приготовленные с большой любовью и заботой. Мы заботимся о безопасности наших клиентов и используем только натуральные, экологически-чистые ингредиенты. Мы заботимся о качестве наших десертов и работаем с лучшими кондитерами и самым современным оборудованием. Мы заботимся о лучшем вкусе нашей продукции и соблюдаем лучшие традиции кулинарного искусства Европы и Азии.
                        Каждому гостью индивидуальный подход и горячее кофе в подарок!
                        </p>
                    </div>

                    <div className={classes.carousel}>
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://images.pexels.com/photos/6287283/pexels-photo-6287283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://images.pexels.com/photos/227432/pexels-photo-227432.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://thecookingsession.com/wp-content/uploads/2019/06/elevate-755068-unsplash.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://pbs.twimg.com/media/EFcYOb6UYAUc78L.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </Element>

        </div>
    );
}


