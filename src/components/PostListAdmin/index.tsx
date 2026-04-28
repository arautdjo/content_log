import { findAllPostAdminCahed } from "@/lib/post/queries/admin"
import Link from "next/link"
import { AdminDelBtn } from "../AdminDelBtn"

export async function PostListAdmin(){

   const posts = await findAllPostAdminCahed()



    return(
           <div className="mb-16">
                {posts.map((post)=>{
                    const isPublished = post.published === false ? 'bg-slate-500' : ''
                return (
                      <div className={`
                        flex gap-2 items-center justify-between
                        py-2 px-2
                        ${isPublished}
                      `} key={post.id}>
                        <Link href={`/admin/post/${post.id}`}>
                           {post.slug}
                        </Link>
                        {isPublished === 'bg-slate-500' && (
                            <span className="text-xs text-slate-700 italic">
                               {''}{''}   ( Não publicado)
                            </span>
                            )}

                          <AdminDelBtn title={post.title} id={post.id}/>
                       </div>
                       )
                })}
            </div>
            )




}


