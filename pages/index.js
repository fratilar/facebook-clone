import Head from "next/head";
import Header from "../components/Header";
import { signIn, useSession } from "next-auth/client";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";

export default function Home({ users }) {
   const [session] = useSession();

   return (
      <div className="h-full bg-gray-100 overflow-hidden">
         <Head>
            <title>Facebook Clone</title>
         </Head>
         {!session ? (
            <div className="flex items-center justify-center -mt-9 flex-col h-screen">
               <Image
                  src="https://edwardlowe.org/wp-content/uploads/Facebook-Logo-PNG-Clipart.png"
                  width={300}
                  height={100}
                  objectFit="contain"
                  alt=""
               />
               <button
                  className="px-5 py-3 bg-blue-600 text-white rounded-lg cursor-pointer z-10"
                  onClick={() => signIn()}
               >
                  Log In With Facebook
               </button>
            </div>
         ) : (
            <>
               <Header />

               <main className="flex">
                  {/* left sidebar */}
                  <Sidebar />
                  {/* center */}
                  <Feed />
                  {/* right */}
                  <Widgets users={users} />
               </main>
            </>
         )}
      </div>
   );
}

export async function getServerSideProps(context) {
   const response = await fetch("https://randomuser.me/api/?results=50");
   const data = await response.json();

   return {
      props: { users: data.results },
   };
}
