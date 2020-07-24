import React from "react";
import "twin.macro";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";

const FeaturedCarousel = () => {
  return (
    <Carousel
      plugins={[
        {
          resolve: slidesToShowPlugin,
          options: {
            numberOfSlides: 6,
          },
        },
      ]}
    >
      <img src="https://via.placeholder.com/250" alt="place" />
      <img src="https://via.placeholder.com/250" alt="place" />
      <img src="https://via.placeholder.com/250" alt="place" />
      <img src="https://via.placeholder.com/250" alt="place" />
      <img src="https://via.placeholder.com/250" alt="place" />
      <img src="https://via.placeholder.com/250" alt="place" />
      <img src="https://via.placeholder.com/250" alt="place" />
      <img src="https://via.placeholder.com/250" alt="place" />
      <img src="https://via.placeholder.com/250" alt="place" />
      <img src="https://via.placeholder.com/250" alt="place" />
      <img src="https://via.placeholder.com/250" alt="place" />
      <img src="https://via.placeholder.com/250" alt="place" />
      <img src="https://via.placeholder.com/250" alt="place" />
      <img src="https://via.placeholder.com/250" alt="place" />
      <img src="https://via.placeholder.com/250" alt="place" />
      <img src="https://via.placeholder.com/250" alt="place" />
    </Carousel>
  );
};

export default FeaturedCarousel;
