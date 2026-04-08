// import Image from "next/image";

import { Suspense } from "react";

import { SpinLoader } from "@/components/SpinLoader";
import PostLists from "@/components/PostsList";
import { Container } from "@/components/Container";
import Header from "@/components/Header";

import { PostFeatured } from "@/components/PostFeatured";
// import Teste from "@/components/Testes";

export default async function Home(){

  return (

        <>

         <Suspense fallback={<SpinLoader/>}>
           <PostFeatured/>
        </Suspense>

        <Suspense fallback={<SpinLoader/>}>
           <PostLists/>
        </Suspense>

            {/* <br/><br/>
            <Teste/> */}



        </>
  );
}
