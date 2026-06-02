import { PostModel } from "@/models/posts/posts-model";

export type PublicPost = Omit<PostModel, 'updatedAt'>


export const makePublicPostFillOrEmpt = (post?:Partial<PostModel>): PublicPost =>{

    return {
        id:post?.id || '',
        slug:post?.slug || '',
        title:post?.title || '',
        excerpt:post?.excerpt || '',
        coverImageUrl:post?.coverImageUrl || '',
        published:post?.published || false,
        createdAt:post?.createdAt || '',
        author:post?.author || '',
        content:post?.content || '',

    }

}

export const makePublicPostFromDB = (post:PostModel): PublicPost =>{
     return makePublicPostFillOrEmpt(post)
    // return {
    //     id:post.id,
    //     slug:post.slug,
    //     title:post.title,
    //     excerpt:post.excerpt,
    //     coverImageUrl:post.coverImageUrl,
    //     published:post.published,
    //     createdAt:post.createdAt,
    //     author:post.author,
    //     content:post.content

    // }

}
