
import { ModalBlocking } from "@/components/BlockingModal"
import { PostListAdmin } from "@/components/PostListAdmin"
import { SpinLoader } from "@/components/SpinLoader"
// import { findAllPostAdminCahed } from "@/lib/post/queries/admin"
// import { Metadata } from "next"
import { Suspense } from "react"

export const dynamic = 'force-dynamic'


// export const metadata: Metadata = {
//     title: 'Post Admin'
// }

export default  function AdminPostPage(){
//   findAllPostAdminCahed
    // const posts = await findAllPostAdmin()


    return(

            <ModalBlocking>
                <Suspense fallback={<SpinLoader/>}>
                <PostListAdmin/>
                </Suspense>


            </ModalBlocking>

    )
}
