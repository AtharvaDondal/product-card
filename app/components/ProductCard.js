import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto p-5 bg-white shadow-lg rounded-xl transform hover:scale-100 transition-all duration-300 ease-in-out">
      <div className="flex flex-col items-center">
        <div className="relative w-full h-52 sm:h-64 rounded-md overflow-hidden shadow-sm">
          <Image
            src={"/productImage.webp"}
            alt="iphone-image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h2 className="text-2xl text-center mt-4 text-gray-800 font-bold">
          Iphone
        </h2>
        <p className="text-gray-600 mt-3 text-clip leading-relaxed">
        iPhone 16 pro. Built for Apple Intelligence. Featuring Camera Control. 48 MP Fusion camera. Five vibrant colours. And A18 chip.</p>
        <button
          type="button"
          className="mt-4 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Purple
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
