'use client'
import { usePathname } from "next/navigation"

export default function Layout({children}){
    const currentPathName=usePathname();
    return(
        <>
       {currentPathName!=="/contact/employee"?
        <h1>Malav is My name</h1>:null}
        {children}
        </>
    )
}