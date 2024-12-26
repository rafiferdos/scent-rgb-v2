"use client";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import logo from "@/public/ScentRGB.png";
import { Button, Divider, Input, Spacer } from "@nextui-org/react";
import Image from "next/image";
const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-center text-white flex-col bg-[#08014f] space-y-7 p-10">
        <Image src={logo} alt="ACME" width={200} height={200} />
        <div className="mx-auto max-w-xl">
          <p className="text-center">
            Start exploring with ScentRGB. Answer a few quick questions and let
            us match you with your ideal scent.
          </p>
        </div>
        <Spacer y={5} />
        <div className="flex flex-col">
          <p className="font-bold text-2xl">Subscribe to our newsletter</p>
          <Spacer y={3} />
          <div className="flex">
            <Input
              placeholder="Enter your email"
              classNames={{
                input: "rounded-l-full",
                inputWrapper: "rounded-l-full",
              }}
            />
            <Button
              variant="solid"
              className="rounded-r-full font-bold px-7 text-white bg-gradient-to-tr from-[#b600ff] to-[#8228ff]"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <Spacer y={5} />
        <Divider className="bg-gray-500 " />
        <div className="flex justify-between w-full mx-auto max-w-7xl">
          <div>
            <p className="text-center font-bold">
              Copyright © {new Date().getFullYear()} | by ScentRGB
            </p>
          </div>
          <div className="flex gap-2">
            <FaFacebook
              href="/"
              className="text-2xl text-white cursor-pointer"
            />
            <FaInstagram
              href="/"
              className="text-2xl text-white cursor-pointer"
            />
            <FaLinkedin
              href="/"
              className="text-2xl text-white cursor-pointer"
            />
            <FaTwitter
              href="/"
              className="text-2xl text-white cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
