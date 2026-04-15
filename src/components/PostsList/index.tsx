import { PostCoverImage } from "../PostCoverImage";
import { PostSUmmary } from "../PostSUmmary";
import { findALlPublicPostsCahed } from "@/lib/post/queries";

export default async function PostLists(){
    await  findALlPublicPostsCahed();
    await  findALlPublicPostsCahed();
    await  findALlPublicPostsCahed();
    await  findALlPublicPostsCahed();
    await  findALlPublicPostsCahed();
    await  findALlPublicPostsCahed();
    await  findALlPublicPostsCahed();
    await  findALlPublicPostsCahed();
    const allPosts = await  findALlPublicPostsCahed();

    return(
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {allPosts.slice(1).map((elemento)=>{
            const postLink = `post/${elemento.slug}`
            return <div key={elemento.id} className="group flex flex-col">
                     <PostCoverImage ImageProps={{
                                   width:1200,
                                   height:720,
                                   alt:elemento.title,
                                   src:elemento.coverImageUrl,
                                }}

                                LinkProps={{
                                 href:postLink,
                                }}
                                />

                <PostSUmmary
                 postHeading="h2"
                 excerpt={elemento.excerpt}
                 postLink={postLink}
                 title={elemento.title}
                 createdAt={elemento.createdAt}
                />
            </div>
        })}
        </div>
    )


}
