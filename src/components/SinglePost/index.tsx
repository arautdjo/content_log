import { findPublicPostBySlugCached } from "@/lib/post/queries/public"
import Image from "next/image"
import { PostHeading } from "../PostHeading"
import { PostDate } from "../PostDate"
import { SafeMarkDown } from "../SafeMarkDown"

type SinglePostProps = {
    slug: string
}

export async function SinglePost({slug}: SinglePostProps){

    const encontrado = await findPublicPostBySlugCached(slug)

    return(

        <article className="mb-16">
            <header className="group flex flex-col gap-4 mb-4">

                <Image
                    className={`rounded-4xl`}
                    width={1200}
                    height={720}
                    src={`${encontrado?.coverImageUrl}`}
                    alt={`${encontrado?.title}`}
                />

                <PostHeading as="h2" url={`/post/${encontrado?.slug}`}>
                    {encontrado?.title}
                </PostHeading>

                    <p>
                     {encontrado?.author} | <PostDate createdAt={`${encontrado?.createdAt}`}/>
                    </p>

                    <p className=" text-2xl mb-9 text-slate-700">
                        {encontrado?.excerpt}
                    </p>

                    <div>
                      <SafeMarkDown markdown={`${encontrado?.content}`}/>
                    </div>
            </header>
        </article>
    )
}
