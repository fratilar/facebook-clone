import React from "react";
import Image from "next/image";

function StoryCard({ users }) {
   return (
      <div className="flex space-x-2 justify-center">
         {users.map((user) => {
            const { id, firstname, lastname, src, profile } = user;
            return (
               <div
                  key={id}
                  className="relative w-14 h-14 md:w-20 md:h-20 lg:w-32 lg:h-52 rounded-full md:rounded-2xl overflow-hidden"
               >
                  <Image
                     src={src}
                     alt=""
                     layout="fill"
                     className="object-cover cursor-pointer hover:scale-105 transition duration-200 ease-in filter brightness-90 hover:brightness-75"
                  />
                  <img
                     className="absolute border-4 border-blue-500 top-3 left-3 rounded-full z-30 hidden lg:inline"
                     src={profile}
                     width={40}
                     height={40}
                     objectfit="contain"
                     alt=""
                  />
                  <p className="absolute hidden lg:inline-flex font-semibold text-white bottom-2 left-3">
                     {firstname} {lastname}
                  </p>
               </div>
            );
         })}
      </div>
   );
}

export default StoryCard;
