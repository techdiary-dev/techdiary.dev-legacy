import React from "react";
import "twin.macro";
import Carousel from "react-multi-carousel";
import { useQuery } from "@apollo/client";
import { FEATURED_ARTICLES } from "quries/ARTICLE";
import styled from "styled-components";
import Link from "next/link";

const StyledCarouselItem = styled.div`
  height: 230px;
`;

const CarouselItem = ({ title, thumbnail, url, author }) => {
  return (
    <Link href="/[username]/[articleSlug]" as={url}>
      <StyledCarouselItem tw="bg-white rounded-md mx-4 shadow-sm overflow-hidden flex flex-col cursor-pointer">
        <div
          tw="h-40 w-full bg-cover bg-center bg-gray-300"
          style={{
            backgroundImage: `url(${thumbnail})`,
          }}
        />
        <div tw="p-2 flex flex-col justify-between flex-1">
          <h3 tw="text-sm text-gray-700">{title}</h3>
          <p tw="text-sm">{author.username}</p>
        </div>
      </StyledCarouselItem>
    </Link>
  );
};

const FeaturedCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
  };

  const { data, loading } = useQuery(FEATURED_ARTICLES);

  return (
    !loading && (
      <Carousel responsive={responsive}>
        {data?.featuredArticles?.data.map((article) => (
          <CarouselItem key={article._id} {...article} />
        ))}
      </Carousel>
    )
  );
};

export default FeaturedCarousel;
