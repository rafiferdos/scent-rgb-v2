import React from 'react';
import logo from '@/public/ScentRGB.png'
import Image from 'next/image';
const Footer = () => {
  return (
    <div>
      <div>
        <Image src={logo} alt="ACME" width={100} height={100} />
      </div>
    </div>
  );
};

export default Footer;