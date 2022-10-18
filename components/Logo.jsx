import React from "react";
import Image from "next/image";

function Logo() {
  return (
    <div className="flex items-center space-x-1">
      <Image src="/favicon.ico" width="40" height="40" alt="logo" />
      <h1 className="text-primary hidden sm:block text-2x1 font-bold">OurPicture</h1>
    </div>
  );
}

export default Logo;
