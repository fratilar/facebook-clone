import React, { useRef, useState } from "react";
import { useSession } from "next-auth/client";
import Image from "next/image";
import { PhotographIcon, VideoCameraIcon, EmojiHappyIcon } from "@heroicons/react/solid";
import { db, storage } from "../firebase";
import firebase from "firebase";

function Input() {
   const [session] = useSession();
   const inputRef = useRef(null);
   const filePickerRef = useRef(null);
   const [imageToPost, setImageToPost] = useState(null);

   const sendPost = (e) => {
      e.preventDefault();
      if (!inputRef.current.value) return;

      db.collection("posts")
         .add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
         })
         .then((doc) => {
            if (imageToPost) {
               const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost, "data_url");

               removePhoto();

               uploadTask.on(
                  "state_change",
                  null,
                  (error) => console.error(error),
                  () => {
                     // when upload completes
                     storage
                        .ref(`posts/${doc.id}`)
                        .getDownloadURL()
                        .then((url) => {
                           db.collection("posts").doc(doc.id).set(
                              {
                                 postImage: url,
                              },
                              { merge: true }
                           );
                        });
                  }
               );
            }
         });

      inputRef.current.value = "";
   };

   const addPhoto = (e) => {
      const reader = new FileReader();
      if (e.target.files[0]) {
         reader.readAsDataURL(e.target.files[0]);
      }

      reader.onload = (readerEvent) => {
         setImageToPost(readerEvent.target.result);
      };
   };

   const removePhoto = () => {
      setImageToPost(null);
   };

   return (
      <div className="bg-white p-4 mt-6 max-w-2xl rounded-lg mx-auto shadow-md">
         <div className="flex items-center cursor-pointer">
            <Image src={session.user.image} width={40} height={40} className="rounded-full" />
            <form className="flex-1 mr-2" onSubmit={sendPost}>
               <input
                  className="bg-gray-100 mx-2 py-2 px-4 rounded-full outline-none w-full cursor-pointer"
                  type="text"
                  placeholder={`La ce te gandesti, ${session.user.name} ?`}
                  ref={inputRef}
               />
            </form>
            {imageToPost && (
               <div
                  onClick={removePhoto}
                  className="cursor-pointer transform filter hover:brightness-110 hover:scale-105 transition duration-150 ml-2"
               >
                  <Image src={imageToPost} width={40} height={20} className="object-contain" alt="" />
                  <p className="text-xs text-red-500 font-semibold text-center">Remove</p>
               </div>
            )}
         </div>
         <div className="flex items-center space-x-2 mt-3 border-t pt-2">
            <div className="flex items-center p-2 hover:bg-gray-100 cursor-pointer rounded-md space-x-2 flex-1 justify-center">
               <VideoCameraIcon className="h-6 text-red-400" />
               <p className="whitespace-nowrap">Clip video in direct</p>
            </div>
            <div
               onClick={() => filePickerRef.current.click()}
               className="flex items-center p-2 hover:bg-gray-100 cursor-pointer rounded-md space-x-2 flex-1 justify-center"
            >
               <PhotographIcon className="h-6 text-green-400" />
               <p>Foto/Video</p>
               <input ref={filePickerRef} onChange={addPhoto} type="file" hidden />
            </div>
            <div className="hidden md:flex items-center p-2 hover:bg-gray-100 cursor-pointer rounded-md space-x-2 flex-1 justify-center">
               <EmojiHappyIcon className="h-6 text-yellow-400" />
               <p>Stare/Activitate</p>
            </div>
         </div>
      </div>
   );
}

export default Input;
