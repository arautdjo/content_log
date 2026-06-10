import slugify from 'slugify'
import { makeRandomString } from './make-random-string'

export function makeSlugFromText(texto: string){
  const slug = slugify(texto,{
    lower:true,
    strict:true,
    trim:true
  })

  return slug+'-'+makeRandomString()
}
