import React, { useRef } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './HomeCarousel.css'
import HomeCarouselOne from './HomeCarouselOne';

const HomeCarousel = () => {

    const carouselRef = useRef();


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const CustomLeftArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className="leftArrowCarousel arrowCarousel"
        >
            ‹
        </button>
    );

    const CustomRightArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className="rightArrowCarousel arrowCarousel"
        >
            ›
        </button>
    );
    return (
        // <div className='HomeCarouselWrap'>

        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={false}           /* Enable autoplay */
            autoPlaySpeed={1500}      /* Set autoplay speed (2 seconds) */
            transitionDuration={500}
            itemClass="carousel-item-spacing"  /* Class for spacing between items */
        // customLeftArrow={<CustomLeftArrow />}
        // customRightArrow={<CustomRightArrow />}
        >
            <div className='CarouselCard'>
                <HomeCarouselOne />
            </div>
        </Carousel>

        // </div>
    )
}

export default HomeCarousel