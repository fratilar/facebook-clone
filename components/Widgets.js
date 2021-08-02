import React from "react";
import { SearchIcon, DotsHorizontalIcon } from "@heroicons/react/outline";
import { VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

function Widgets({ users }) {
   return (
      <div className="hidden lg:flex flex-col h-screen overflow-y-auto p-4 max-w-[600px] xl:min-w-[300px] scrollbar-hide">
         <div className="flex items-center text-gray-600 justify-between">
            <h1 className="font-semibold text-md">Contacte</h1>
            <div className="flex items-center space-x-2">
               <VideoCameraIcon className="h-7 p-1 hover:rounded-full hover:bg-gray-200 cursor-pointer" />
               <SearchIcon className="h-7 p-1 hover:rounded-full hover:bg-gray-200 cursor-pointer" />
               <DotsHorizontalIcon className="h-7 p-1 hover:rounded-full hover:bg-gray-200 cursor-pointer" />
            </div>
         </div>
         {users?.map((user) => (
            <Contact
               key={user.login.uuid}
               image={user.picture.thumbnail}
               firstname={user.name.first}
               lastname={user.name.last}
            />
         ))}
      </div>
   );
}

export default Widgets;
