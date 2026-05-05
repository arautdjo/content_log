import { postRepository } from "@/repositories/post";
import { unstable_cache } from "next/cache";
import { cache } from "react";

export const findPostByIdAdmin =
cache(async (id: string)=> await  postRepository.findById(id))

export const findAllPostAdmin =
cache(async ()=> await  postRepository.findAll())


export const findAllPostAdminCahed = unstable_cache(postRepository.findAll,
    ['admin-cache'],{tags:['admin-cache']}
)







// export const findAllPostAdminCahed = cache(()=>{

// })



