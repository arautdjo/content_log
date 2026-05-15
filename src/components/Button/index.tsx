import {twMerge} from 'tailwind-merge'

type ButtonVariants = 'default' | 'ghost' | 'danger'
type ButtonSizes = 'sm' | 'md' | 'lg'

type ButtonProps = {
    variant?:ButtonVariants,
    size?: ButtonSizes
} & React.ComponentProps<'button'>

export function Button({variant='default', size='md',  ...props}: ButtonProps){

     const buttinVariants = {
          default:`
             bg-blue-800 text-slate-400 hover:bg-blue-900
          `,
          ghost: `
             bg-slate-300 text-slate-600 hover:bg-slate-500
          `,
          danger: `
             bg-red-600 text-red-100 hover:bg-red-700
          `
     }


     const ButtonSizes: Record<ButtonSizes,string> = {
         lg: `text-lg/tight py-4 px-6 rounded-lg [&_svg]:w-5 [&_svg]:h-5 gap-3`,
         sm: `text-xs/tight py-1 px-2 rounded-sm [&_svg]:w-3 [&_svg]:h-3 gap-1`,
         md: 'text-base/tight py-2 px-4 rounded-md [&_svg]:w-4 [&_svg]:h-4 gap-2'
     }

     const buttonKlasss = buttinVariants[variant]
     const ButtonSizesKlass = ButtonSizes[size]
     const commonKrasses = `
     flex items-center justify-center cursor-pointer transition
     disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed
     `



     const Kalsses = [commonKrasses, buttonKlasss, ButtonSizesKlass, props.className]

     console.log('HIDE YOUR LOVE AWAY')
     console.log(Kalsses.join(" "))
     console.log('HIDE YOUR LOVE AWAY')
    return(
        <button {...props} className={twMerge(Kalsses.join(" "))} />
    )
}
