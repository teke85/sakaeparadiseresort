import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1748274604/sakae_logo_i0rria.png"
      alt="Liseli Lodge Logo"
      width={160}
      height={48}
      className="w-full h-auto object-contain"
      priority
    />
  );
};

export default Logo;
