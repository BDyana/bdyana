"use client";
import { BaggageClaim } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
export default function   CategoryCarousel({ products, isMarketPage = false }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: isMarketPage ? 5 : 6,
      slidesToSlide: 2, // optional, default to 1.
      partialVisibilityGutter: 10,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: isMarketPage ? 3 : 4,
      slidesToSlide: 2,
      partialVisibilityGutter: 10,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 10,
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      partialVisible={true}
      autoPlay={false}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="transform 400ms ease-in-out"
      transitionDuration={100}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-0-px"
    >
      {products.map((product, i) => {
        return <Product product={product} key={i} />;
      })}
    </Carousel>
  );
}
