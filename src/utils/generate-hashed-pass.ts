import { hahsPassword, verifyPassword } from "@/lib/login/manage-login";

export async function generateHashedPass(pass:string){
   const hasehdPass = Buffer.from(pass).toString('base64')
   return hasehdPass

}

export async function decriptHased64(hasehd64: string){
  const hasedBack = Buffer.from(hasehd64,'base64').toString('utf-8')
  return hasedBack
}


(async function GenerateSenha(){
    const senhaAGerar = 'copa2026'
    const generated = await hahsPassword(senhaAGerar)

    console.log('** PASS GENERATED **')
    console.log(generated)
    console.log('** PASS GENERATED **')



})()
