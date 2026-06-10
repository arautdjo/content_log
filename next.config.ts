import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
//    experimental:{
//      useCache:true
//    },
//    cacheLife:{
//     seconds:{
//         stale:7,
//        revalidate:15,
//        expire:25
//    }
//     }

   images:{
     remotePatterns: [
        {
        protocol: 'https',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
       },

       {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
       },
    ],
   },
    experimental:{
        useCache:true
    },

    cacheLife:{
        // seconds:{
        //     stale:0,
        //     revalidate:20,
        //     expire:40
        // }

        // seconds:{
        //     stale:0,
        //     revalidate:0,
        //     expire:0
        // }

        seconds:{
            stale:0,
            revalidate:20,
            expire:20
        }
    }
};

export default nextConfig;
