import React from "react";
import Input from "./Input";
import Posts from "./Posts";
import Stories from "./Stories";

function Feed() {
   return (
      <div className="flex-grow h-screen m-5 overflow-y-auto scrollbar-hide pb-20">
         {/* Stories */}
         <Stories />
         {/* Input Box */}
         <Input />
         {/* Posts */}
         <Posts />
      </div>
   );
}

export default Feed;
