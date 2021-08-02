import React from "react";
import Image from "next/image";

function Contact({ image, firstname, lastname }) {
   return (
      <div className="mt-4">
         <div className="relative flex items-center space-x-3 hover:bg-gray-200 cursor-pointer p-2 h-13 rounded-lg">
            <Image src={image} width={35} height={35} className="rounded-full" alt="" />
            <div className="w-3 h-3 border-[3px] border-white bg-green-700 absolute rounded-full bottom-1 left-4"></div>
            <h2 className="font-semibold whitespace-nowrap">
               {firstname} {lastname}
            </h2>
         </div>
      </div>
   );
}

export default Contact;
