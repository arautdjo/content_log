// import Image from "next/image";

import { Suspense } from "react";

import { SpinLoader } from "@/components/SpinLoader";
import PostLists from "@/components/PostsList";

import { PostFeatured } from "@/components/PostFeatured";
// import Teste from "@/components/Testes";

export const dynamic = 'force-static'


export default async function Home(){

  return (

        <>
         <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
           <PostFeatured/>
           <PostLists/>
         </Suspense>



            {/* <br/><br/>
            <Teste/> */}
        </>
  );
}
