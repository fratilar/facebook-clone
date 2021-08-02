import Image from "next/image";
import React from "react";
import { ThumbUpIcon, ChatAltIcon, ReplyIcon } from "@heroicons/react/outline";

function Post({ name, email, message, image, postImage, timestamp }) {
   return (
      <div className="flex flex-col max-w-2xl mx-auto">
         <div className="bg-white mt-5 p-5 shadow-sm rounded-t-xl">
            <div className="flex items-center space-x-2">
               <Image src={image} className="rounded-full" width={40} height={40} objectFit="contain" alt="" />
               <div>
                  <p className="font-semibold">{name}</p>
                  <p className="text-xs text-gray-600 font-medium">{new Date(timestamp?.toDate()).toLocaleString()}</p>
               </div>
            </div>
            <p className="pt-4">{message}</p>
         </div>
         {postImage && (
            <div className="relative h-56 md:h-96 bg-blue-100 shadow-sm">
               <Image src={postImage} layout="fill" objectFit="contain" alt="" />
            </div>
         )}

         <div className="flex space-x-2 bg-white p-2 rounded-b-2xl shadow-sm border-t">
            <div className="flex flex-auto items-center text-sm text-gray-600 p-2 cursor-pointer hover:bg-gray-100 rounded-md space-x-2 justify-center">
               <ThumbUpIcon className="h-6" />
               <p className="font-medium whitespace-nowrap">Imi place</p>
            </div>
            <div className="flex flex-auto items-center text-sm text-gray-600 p-2 cursor-pointer hover:bg-gray-100 rounded-md space-x-2 justify-center">
               <ChatAltIcon className="h-6" />
               <p className="font-medium whitespace-nowrap">Comenteaza</p>
            </div>
            <div className="flex flex-auto items-center text-sm text-gray-600 p-2 cursor-pointer hover:bg-gray-100 rounded-md space-x-2 justify-center">
               <ReplyIcon className="h-6" />
               <p className="font-medium whitespace-nowrap">Distribuie</p>
            </div>
         </div>
      </div>
   );
}

export default Post;
