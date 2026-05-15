import { useId } from "react"
// import {twMerge} from 'tailwind-merge'


type InputTextProps = {
    labelText:string
} & React.ComponentProps<'input'>

export function InputText({labelText, ...props}: InputTextProps){

    const id = useId()
    return(
        <div className="flex flex-col gap-2">
            {labelText &&
            <label
            className="text-sm"
             htmlFor={id}>
                {labelText}
            </label>
            }
            <input
            {...props}
            className={`
                bg-white outline-0 ring-2 ring-red-600
                text-black text-base/tight py-1 px-4
                rounded transition
                placeholder-black-400 focus:ring-green-500
                disabled:bg-slate-200 disabled:cursor-not-allowed
                disabled:placeholder-slate-400
                disabled:text-slate-400
                read-only:text-slate-400

                ${props.className}
                `}
                id={id}

            />
        </div>
    )
}
