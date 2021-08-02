import Image from "next/image";
import React from "react";

function SidebarRow({ Icon, title, src }) {
   return (
      <div className="flex items-center hover:bg-gray-200 cursor-pointer rounded-md space-x-2 p-3">
         {src && <Image src={src} width={30} height={30} className="rounded-full" alt="" />}
         {Icon && <Icon className="h-8 text-blue-500" />}
         <p className="hidden md:inline-flex font-semibold">{title}</p>
      </div>
   );
}

export default SidebarRow;
