"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ScentImage from '@/public/scent.png';
import DraggableBox from "@/components/DraggableBox";
import groupImg from '@/public/Group 1321314407.png';

const Landing = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scent3DClick, setScent3DClick] = useState(false);
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const overlay = container.querySelector(".three-overlay") as HTMLElement;
    if (!overlay) return;

   
  }, []);
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <div className="max-w-4xl p-16 mx-auto">
        <h1 className="text-center text-4xl font-bold">
          Discover Your Signature Scent Using Our Functional Benefit
          Classification Map
        </h1>
      </div>

      <div className="flex">
        <div className="w-1/2 flex flex-col justify-center">
          <div className="space-y-6 px-12 rounded-3xl backdrop-blur-md bg-white/5 py-8">
            <h1 className="text-2xl font-bold">
              Based on the perfumes you love (and those you don&apos;t),
              we&apos;ve discovered your vibe is sporty yet elegant.
            </h1>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">
                Here&apos;s your signature scents:
              </h2>
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
              <div>
                <p className="text-sm">
                  Click the icons to select the scents you&apos;d like to
                  generate and explore online!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="relative">
              <div>
                <Image src={ScentImage} width={800} height={800} alt="scent"  onMouseOut={() => setScent3DClick(false)}/>
              </div>
              <div className="absolute top-1/2 left-[46%] transform -translate-x-1/2 -translate-y-1/2  h-80 w-80 space-y-4">
                <DraggableBox  setScent3DClick={setScent3DClick}/>
              </div>
            </div>
          </div>
          
          {
            scent3DClick && (
              <div className="absolute top-[88%] left-[73%] transform -translate-x-1/2 -translate-y-1/2">
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
