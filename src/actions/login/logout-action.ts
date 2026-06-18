import { deleteLoginSession } from "@/lib/login/manage-login";
import { assyncDelay } from "@/utils/async-delay";
import { redirect } from "next/navigation";

export async function logOutAction(){
  await assyncDelay(4000)

  await deleteLoginSession()
  redirect('/')

}
