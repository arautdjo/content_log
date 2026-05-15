import { findAllPostAdminCahed } from "@/lib/post/queries/admin"
import { ErrorsMessages } from "../../ErrorsMessages"
import { PostListAdminCLient } from "../PostListAdminCLient"


export async function PostListAdmin(){


   const posts = await findAllPostAdminCahed()


    if(posts.length <= 0)  return <ErrorsMessages contentTitle="Hey MAn 😁" content="How about a post??"/>

    return(
        <PostListAdminCLient posts={posts}/>
        )




}


