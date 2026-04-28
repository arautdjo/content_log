'use server'

import { assyncDelay } from "@/utils/async-delay"
import { logColored } from "@/utils/log-color"

export async function deletePostAction(id: string){
  await assyncDelay(9000)
  logColored('@@@@@@@@@@@')
  console.log(id)
  logColored('@@@@@@@@@@@')

  return `ok 200 para ID's:  ${id}`
}
