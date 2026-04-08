import Link from "next/link";
import Image from 'next/image';

type PostCoverImageProps = {
     ImageProps: React.ComponentProps<typeof Image>,
     LinkProps: React.ComponentProps<typeof Link>,
}

export function PostCoverImage({ImageProps,LinkProps}: PostCoverImageProps){
  return(
     <Link

                className={`
                    w-full h-full overflow-hidden rounded-xl ${LinkProps.className}
                 `}
                 {...LinkProps}
                >
                 <Image
                 className={`
                    w-full h-full object-cover object-center group-hover:scale-105 transition duration-100
                     ${ImageProps.className}
                    `}
                  {...ImageProps}
                  alt={ImageProps.alt}
                 />

                </Link>
  )
}
