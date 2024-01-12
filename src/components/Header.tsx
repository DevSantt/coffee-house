"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const changeImage = () => {
      setCurrentImage((prevImage) => (prevImage % 3) + 1);
    };

    const intervalId = setInterval(changeImage, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const imagePath = `/hero${currentImage}.jpg`;

  return (
    <header className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-black" />
      <div className="mx-auto">
        <div className="relative  sm:overflow-hidden">
          <div className="absolute inset-0 ">
            <Image
              priority
              fill
              className="h-full w-full object-cover "
              src={imagePath}
              alt="Coffee grinder"
            />
            <div className="absolute inset-0 bg-primary mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 bg-black bg-opacity-50 animate-fade-down">
            <p className="relative left-0 right-10  mt-5 max-w-xl text-xl font-semibold uppercase tracking-wide text-white ">
              The Coffee House
            </p>
            <h1 className="mt-1 font-bold uppercase text-2xl sm:text-5xl sm:tracking-tight lg:text-7xl  ">
              <span className="block text-white">Life is better with</span>
              <span className="block text-accent">coffee</span>
            </h1>

            <div className="mx-auto flex mt-10 max-w-xs sm:flex sm:min-w-full">
              <Link href="#buyCoffee">
                <button className="flex items-center justify-center relative rounded-sm border border-white bg-transparent transition-all ease-in-out px-4 py-3 text-base text-[#fff] font-medium hover:bg-white hover:text-night sm:px-8 ">
                  Get yours now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
