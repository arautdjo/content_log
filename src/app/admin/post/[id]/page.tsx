import { Button } from "@/components/Button"
import { BugIcon } from "lucide-react"

export const dynamic = 'force-dynamic'

type AdminPostIDPageProps = {
    params: Promise<{
        id:string
    }>,
    toggleSetter:()=>void,
    isOpen:boolean
}
// {params}: AdminPostIDPageProps
export default function AdminPostIDPage({params}: AdminPostIDPageProps){

    // const {id} = await params
    return <div className="py-16 text-6xl text-blue-800">
        <p>

         Oi: AdminPostIDPage:: {''} - {''}{'id'}
        </p>

        <>
         <div className="text-sm py-16 flex gap-4 flex-wrap items-center">
            <Button variant="default" size="sm">
                <BugIcon/>
                Confirmar
            </Button>

            <Button variant="ghost" size="md">
                <BugIcon/>
                Ok
            </Button>

            <Button size="lg" variant="danger">
                <BugIcon/>
                Cancel
            </Button>

            <Button variant="ghost" size="md">
                <BugIcon/>
                Submit
            </Button>
        </div>

        </>


    </div>
}
