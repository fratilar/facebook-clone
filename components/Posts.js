import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Post from "./Post";

function Posts() {
   const [realTimePosts] = useCollection(db.collection("posts").orderBy("timestamp", "desc"));

   return (
      <div>
         {realTimePosts?.docs.map((post) => {
            return (
               <Post
                  key={post.id}
                  name={post.data().name}
                  email={post.data().email}
                  image={post.data().image}
                  postImage={post.data().postImage}
                  message={post.data().message}
                  timestamp={post.data().timestamp}
               />
            );
         })}
      </div>
   );
}

export default Posts;
