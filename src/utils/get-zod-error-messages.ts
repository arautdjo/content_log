import { ZodFormattedError } from "zod/v3";

export function getZodErrorMessages<T>(error: ZodFormattedError<T>): string[]{

    return Object.values(error)
             .map((campo)=>{
                 if(Array.isArray(campo) ){
                      return campo
                 }

                 return campo?._errors || []
             }).flat().filter(Boolean)
}
