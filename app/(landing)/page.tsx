"use client";
import { Spacer } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ScentImage from '@/public/scent.png';
import Scent3DClick from "@/components/Scent3DClick";
import groupImg from '@/public/Group 1321314407.png';
import WomenPerfumeImage from "@/public/women-s-perfume-with-flowers-black-background.png";
// interface Scent {
//   id: string;
//   label: string;
//   value: number;
//   color: number;
//   position: [number, number, number];
// }

// const scents: Scent[] = [
//   {
//     id: "woody",
//     label: "Woody",
//     value: 57.61,
//     color: 0xd97706,
//     position: [0.3, 0.3, 0],
//   },
//   {
//     id: "powdery",
//     label: "Powdery",
//     value: 51.18,
//     color: 0x7dd3fc,
//     position: [-0.3, 0.3, 0],
//   },
//   {
//     id: "citrus",
//     label: "Citrus",
//     value: 70.0,
//     color: 0xfacc15,
//     position: [0, 0, 0],
//   },
//   {
//     id: "marine",
//     label: "Marine",
//     value: 65.0,
//     color: 0x3b82f6,
//     position: [0.3, -0.3, 0],
//   },
//   {
//     id: "musky",
//     label: "Musky",
//     value: 46.7,
//     color: 0x4b5563,
//     position: [-0.3, -0.3, 0],
//   },
//   {
//     id: "light-green",
//     label: "Light Green",
//     value: 60.0,
//     color: 0x4ade80,
//     position: [0, 0.4, 0],
//   },
// ];
const Landing = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scent3DClick, setScent3DClick] = useState(false);
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const overlay = container.querySelector('.three-overlay') as HTMLElement;
    if (!overlay) return;

    // const width = overlay.clientWidth;
    // const height = overlay.clientHeight;


  }, []);
  return (
    <div
      className="min-h-screen max-w-7xl mx-auto bg-cover bg-center"
      style={{
        backgroundImage: `url(${WomenPerfumeImage})`,
      }}
    >
      <div className="max-w-4xl p-16">
        <h1 className="text-center text-4xl font-bold">
          Discover Your Signature Scent Using Our Functional Benefit
          Classification Map
        </h1>
      </div>

      <Spacer y={10} />
      <div className="flex">

        <div className="w-1/2 p-12 flex flex-col justify-center">
          <div className="space-y-6 ">
            <h1 className="text-2xl font-bold">
              Based on the perfumes you love (and those you don&apos;t), we&apos;ve
              discovered your vibe is sporty yet elegant.
            </h1>
            <div className="space-y-4">
              <h2 className="text-xl">Here&apos;s your signature scents:</h2>
              <div className="space-y-2">
                <p>
                  1. Bold perfumes: These unique creations are made just for you
                  and aren&apos;t available in stores.
                </p>
                <p>
                  2. Background perfumes: Market favorites you may not have
                  discovered yet.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div>
            <Image src={ScentImage} width={800} height={800} alt="scent" onMouseLeave={() => setScent3DClick(false)} />
          </div>
          <div
            className="absolute top-1/2 left-[48%] transform -translate-x-1/2 -translate-y-1/2 h-[340px] w-[320px] overflow-auto perspective-1000"
            style={{
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // Internet Explorer 10+
            }}
          >
            <Scent3DClick setScent3DClick={setScent3DClick} />
            {/* Small images inside the main image, with random positioning */}
            {/* <div className="absolute inset-0 flex flex-wrap justify-center items-center space-x-2 space-y-2">
              {[...Array(20)].map((_, index) => {
                const randomX = Math.random() * 100; // Random X position
                const randomY = Math.random() * 100; // Random Y position
                const size = Math.random() < 0.5 ? 15 : 35; // Random size for mini or small
                const imageSrc = Math.random() < 0.5 ? MiniScent : SmallScent; // Randomly choose image
                const depth = Math.random() * 100; // Random depth for the 3D effect

                return (
                  <div
                    key={index}
                    className="absolute"
                    style={{
                      left: `${randomX}%`,
                      top: `${randomY}%`,
                      width: `${size}px`,
                      height: `${size}px`,
                      transform: `translateZ(${depth}px)`, // Apply depth to create 3D effect
                    }}
                  >
                    <Image src={imageSrc} width={size} height={size} alt="random-scent" />
                  </div>
                );
              })}
            </div> */}
          </div>
          {
            scent3DClick && (
              <div className="absolute top-[68%] left-[70%] transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={groupImg} width={200} height={150} alt="scent" />
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Landing;
