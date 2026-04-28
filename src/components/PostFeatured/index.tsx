import { PostCoverImage } from "../PostCoverImage";
import { PostSUmmary } from "../PostSUmmary";
import { findALlPublicPostsCahed } from "@/lib/post/queries/public";

export async function PostFeatured(){
        const allPosts = await findALlPublicPostsCahed();
        const FeaturedPost = allPosts[0]

    const slug = FeaturedPost.slug
    const postLink = `/post/${slug}`
    return(
        <section className={`
              grid grid-cols-1 gap-8 mb-16
              sm:grid-cols-2 group
            `}>
           <PostCoverImage ImageProps={{
              width:1200,
              height:720,
              alt:FeaturedPost.title,
              src:FeaturedPost.coverImageUrl,
              priority:true
           }}

           LinkProps={{
            href:'#',
           }}
           />

            <PostSUmmary
                 postHeading="h1"
                 excerpt={FeaturedPost.excerpt}
                 postLink={postLink}
                 title={FeaturedPost.title}
                 createdAt={FeaturedPost.createdAt}
                />
        </section>
    )
}
