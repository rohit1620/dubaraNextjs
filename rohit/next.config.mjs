

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["lh3.googleusercontent.com"]
    },
    // output: "export"
    redirects:async()=>{
        return [
            {
               source:'/redirection',
               destination:"/home",
               permanent:false
            },
              {
               source:'/redirection/:id',
               destination:"/home",
               permanent:false
            }
        ]
    }
};

export default nextConfig;
