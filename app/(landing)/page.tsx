"use client";
import MiniScent from "@/public/mini-perfume.png";
import ScentImage from "@/public/scent.png";
import SmallScent from "@/public/small-perfume.png";
import { Spacer } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
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
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const overlay = container.querySelector(".three-overlay") as HTMLElement;
    if (!overlay) return;

    // const width = overlay.clientWidth;
    // const height = overlay.clientHeight;
  }, []);
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <div className="max-w-4xl p-16 mx-auto">
        <h1 className="text-center text-4xl font-bold">
          Discover Your Signature Scent Using Our Functional Benefit
          Classification Map
        </h1>
      </div>

      <Spacer y={10} />
      <div className="flex">
        <div className="w-1/2 p-12 flex flex-col justify-center">
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
                <Image src={ScentImage} width={800} height={800} alt="scent" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border h-72 w-72 space-y-4">
                {/* small images inside image */}
                <div className="flex gap-16">
                  <Image
                    src={MiniScent}
                    width={15}
                    height={15}
                    alt="mini-scent"
                  />
                  <Image
                    src={MiniScent}
                    width={15}
                    height={15}
                    alt="mini-scent"
                  />
                  <Image
                    src={MiniScent}
                    width={15}
                    height={15}
                    alt="mini-scent"
                  />
                  <Image
                    src={MiniScent}
                    width={15}
                    height={15}
                    alt="mini-scent"
                  />
                </div>
                <div className="flex gap-24">
                  <Image
                    src={MiniScent}
                    width={15}
                    height={15}
                    alt="mini-scent"
                  />
                  <Image
                    src={MiniScent}
                    width={15}
                    height={15}
                    alt="mini-scent"
                  />
                  <Image
                    src={MiniScent}
                    width={15}
                    height={15}
                    alt="mini-scent"
                  />
                </div>
                <div className="flex gap-24">
                  <div className="w-5 h-5" />
                  <Image
                    src={MiniScent}
                    width={15}
                    height={15}
                    alt="mini-scent"
                  />
                  <Image
                    src={MiniScent}
                    width={15}
                    height={15}
                    alt="mini-scent"
                  />
                </div>
                <div className="flex gap-24">
                  <div className="w-5 h-5" />
                  <Image
                    src={SmallScent}
                    width={35}
                    height={35}
                    alt="mini-scent"
                  />
                  <Image
                    src={MiniScent}
                    width={15}
                    height={15}
                    alt="mini-scent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
