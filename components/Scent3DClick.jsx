'use client'
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import MiniScent from '@/public/mini-perfume.png';
import SmallScent from '@/public/small-perfume.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';
import Image from 'next/image';

// import required modules

export default function Scent3DClick({ setScent3DClick }) {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const getRandomPosition = () => {
      const randomX = Math.floor(Math.random() * 360); // Random X between 0 and 90% of the container width
      const randomY = Math.floor(Math.random() * 360); // Random Y between 0 and 90% of the container height
      return { left: `${randomX}%`, top: `${randomY}%` };
    };

    // Generate 10 random positions
    const randomPositions = Array.from({ length: 15 }, () => getRandomPosition());
    setPositions(randomPositions);
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={2}
        centeredSlides={true}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          {positions.map((position, index) => (
            <Image
              onMouseOver={() => setScent3DClick(true)}
              
              key={index}
              src={SmallScent} // Alternate between the two images
              width={60}
              height={60}
              alt={index % 2 === 0 ? 'small-scent' : 'mini-scent'}
              style={{
                position: 'absolute',
                left: position.left,
                top: position.top,
              }}
            />
          ))}
        </SwiperSlide>
        <SwiperSlide className="relative">
          {positions.map((position, index) => (
            <Image
              key={index}
              src={SmallScent} // Alternate between the two images
              width={60}
              height={60}
              alt={index % 2 === 0 ? 'mini-scent' : 'small-scent'}
              style={{
                position: 'absolute',
                left: position.left,
                top: position.top,
              }}
            />
          ))}
        </SwiperSlide>
        <SwiperSlide className="relative">
          {positions.map((position, index) => (
            <Image
              onMouseOver={() => setScent3DClick(true)}
              key={index}
              src={SmallScent} // Alternate between the two images
              width={60}
              height={60}
              alt={index % 2 === 0 ? 'small-scent' : 'mini-scent'}
              style={{
                position: 'absolute',
                left: position.left,
                top: position.top,
              }}
            />
          ))}
        </SwiperSlide>
        <SwiperSlide className="relative">
          {positions.map((position, index) => (
            <Image
              onMouseOver={() => setScent3DClick(true)}
              key={index}
              src={SmallScent} // Alternate between the two images
              width={60}
              height={60}
              alt={index % 2 === 0 ? 'small-scent' : 'mini-scent'}
              style={{
                position: 'absolute',
                left: position.left,
                top: position.top,
              }}
            />
          ))}
        </SwiperSlide>
        <SwiperSlide className="relative">
          {positions.map((position, index) => (
            <Image
              onMouseOver={() => setScent3DClick(true)}
              key={index}
              src={SmallScent} // Alternate between the two images
              width={60}
              height={60}
              alt={index % 2 === 0 ? 'small-scent' : 'mini-scent'}
              style={{
                position: 'absolute',
                left: position.left,
                top: position.top,
              }}
            />
          ))}
        </SwiperSlide>
        <SwiperSlide className="relative">
          {positions.map((position, index) => (
            <Image
              onMouseOver={() => setScent3DClick(true)}
              key={index}
              src={SmallScent} // Alternate between the two images
              width={60}
              height={60}
              alt={index % 2 === 0 ? 'small-scent' : 'mini-scent'}
              style={{
                position: 'absolute',
                left: position.left,
                top: position.top,
              }}
            />
          ))}
        </SwiperSlide>
        <SwiperSlide className="relative">
          {positions.map((position, index) => (
            <Image
              onMouseOver={() => setScent3DClick(true)}
              key={index}
              src={SmallScent} // Alternate between the two images
              width={60}
              height={60}
              alt={index % 2 === 0 ? 'small-scent' : 'mini-scent'}
              style={{
                position: 'absolute',
                left: position.left,
                top: position.top,
              }}
            />
          ))}
        </SwiperSlide>
        <SwiperSlide className="relative">
          {positions.map((position, index) => (
            <Image
              onMouseOver={() => setScent3DClick(true)}
              key={index}
              src={SmallScent} // Alternate between the two images
              width={60}
              height={60}
              alt={index % 2 === 0 ? 'small-scent' : 'mini-scent'}
              style={{
                position: 'absolute',
                left: position.left,
                top: position.top,
              }}
            />
          ))}
        </SwiperSlide>
        <SwiperSlide className="relative">
          {positions.map((position, index) => (
            <Image
              onMouseOver={() => setScent3DClick(true)}
              key={index}
              src={SmallScent} // Alternate between the two images
              width={60}
              height={60}
              alt={index % 2 === 0 ? 'mini-scent' : 'small-scent'}
              style={{
                position: 'absolute',
                left: position.left,
                top: position.top,
              }}
            />
          ))}
        </SwiperSlide>
        <SwiperSlide className="relative">
          {positions.map((position, index) => (
            <Image
              onMouseOver={() => setScent3DClick(true)}
              key={index}
              src={SmallScent} // Alternate between the two images
              width={60}
              height={60}
              alt={index % 2 === 0 ? 'small-scent' : 'mini-scent'}
              style={{
                position: 'absolute',
                left: position.left,
                top: position.top,
              }}
            />
          ))}
        </SwiperSlide>

      </Swiper>
    </>
  );
}
