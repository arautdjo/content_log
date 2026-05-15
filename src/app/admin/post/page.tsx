
import { PostListAdmin } from "@/components/Admin/PostListAdmin"
import { SpinLoader } from "@/components/SpinLoader"
// import { findAllPostAdminCahed } from "@/lib/post/queries/admin"
// import { Metadata } from "next"
import { Suspense } from "react"


export const dynamic = 'force-dynamic'


// export const metadata: Metadata = {
//     title: 'Post Admin'
// }
type AdminPostPageProps = {
  isOpen:boolean,
  toggleSetter:()=>void
}

export default  function AdminPostPage(){
//   findAllPostAdminCahed
    // const posts = await findAllPostAdmin()

//    console.log(isOpen,toggleSetter)
    return(


        <Suspense fallback={<SpinLoader/>}>
                     <PostListAdmin/>
                </Suspense>


    )
}
