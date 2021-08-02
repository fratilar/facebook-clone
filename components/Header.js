import React from "react";
import Image from "next/image";
import {
   SearchIcon,
   UserGroupIcon,
   PresentationChartBarIcon,
   ShoppingCartIcon,
   PlayIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon, HomeIcon, ViewGridIcon, ChatIcon, BellIcon } from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";
import { useSession, signOut } from "next-auth/client";

function Header(Icon) {
   const [session] = useSession();

   return (
      <div className="flex items-center bg-white shadow-md p-2 md:py-0 sm:px-4 sticky top-0 z-50">
         {/* left */}
         <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
            width={40}
            height={40}
            objectFit="contain"
            alt=""
         />
         <div className="flex items-center ml-2 bg-gray-100 p-2 rounded-full">
            <SearchIcon className="h-6 text-gray-500 cursor-pointer" />
            <input
               className="hidden xl:inline bg-transparent outline-none ml-2 pr-3 placeholder-text-gray-500"
               type="text"
               placeholder="Cauta pe Facebook"
            />
         </div>
         {/* center */}
         <div className="flex justify-center flex-grow">
            <div className="flex space-x-5 xl:space-x-2">
               <HeaderIcon active Icon={HomeIcon} />
               <HeaderIcon Icon={PresentationChartBarIcon} />
               <HeaderIcon Icon={ShoppingCartIcon} />
               <HeaderIcon Icon={UserGroupIcon} />
               <HeaderIcon Icon={PlayIcon} />
            </div>
         </div>

         {/* right */}
         <div className="flex items-center justify-end space-x-2">
            <div className="hidden xl:flex items-center hover:bg-gray-100 rounded-3xl p-1">
               {/* profile img */}
               <Image src={session.user.image} width={28} height={28} className="rounded-full" alt="" />
               <p className="cursor-pointer font-semibold px-2">{session.user.name}</p>
            </div>
            <ViewGridIcon className="icon" />
            <ChatIcon className="icon" />
            <BellIcon className="icon" />
            <ChevronDownIcon className="icon" onClick={signOut} />
         </div>
      </div>
   );
}

export default Header;
