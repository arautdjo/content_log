import { logColored } from "./log-color"

export async function assyncDelay(miliseconds: number = 0, verbose =false){
  if(miliseconds<=0) return

  if(verbose){
      logColored(`Delaying for ${miliseconds / 1000}s`)
  }

  await new Promise(resolve => setTimeout(resolve,miliseconds))
}
