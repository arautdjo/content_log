
import { revalidateExampleAction } from "@/actions/revalidate-examples"
// import { formatDateTimeTestWrapper } from "@/utils/formate-datetime"

// export const dynamic = 'force-static'
// export const dynamicParams = true

// export const revalidate =30



// export async function generateStaticParams(){
//     return [{id:'casa'},{id:"tijolo"}]
// }


export default async function examplePage({params}: {params: Promise<{id:string}>}){
    // cacheLife('seconds')

    // const hora = Date.now().toLocaleString('pt-BR')
    const hora = Math.random()
    const {id} = await params


    // const userNames = await fetch('https://randomuser.me/api/?results=1',{
    //     next:{
    //         tags:['randomUser'],
    //         revalidate:15
    //     }
    // })






    console.log('')
    console.log('')
    console.log('###-####-####-####')
    console.log()
    console.log('###-####-####-####')
    console.log('')
    console.log('')

    return(
        <main className="min-h-[600px] text-4xl font-bold">
           <div>Hora Atual::  {hora}</div>
            <div>
                <form className="py-16" action={revalidateExampleAction}>
                  <input type="hidden" name="caminho" defaultValue={`/exemplo/${id}`}/>

                  <button className="bg-amber-500 text-white rounded hover:bg-amber-600 transition cursor-pointer" type="submit">
                     REVALIDATE
                  </button>
                </form>
            </div>

        </main>
    )
}
