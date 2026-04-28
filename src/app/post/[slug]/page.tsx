import { SinglePost } from "@/components/SinglePost";
import { SpinLoader } from "@/components/SpinLoader";
import {  findPublicPostBySlugCached } from "@/lib/post/queries/public";
import { PostModel } from "@/models/posts/posts-model";
import { Metadata } from "next";
import { Suspense } from "react";

export const dynamic = 'force-static'


export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata>{
        const encontrado = await findPublicPostBySlugCached(await params.then((valor)=>valor.slug))

    return{
        title: encontrado.title,
        description: encontrado.excerpt
    }
}

export default async function PostSlugPage({params}: {params: Promise<{slug: string}>}){
    const resolveParams = await params.
    then((resolvido)=>resolvido.slug).catch((error)=>`deu o erro ${error}`);



    return(
        <>
            <Suspense fallback={<SpinLoader className="min-h-20 mb-16"/>}>
              <SinglePost slug={resolveParams}/>
            </Suspense>
        </>
    )
}
