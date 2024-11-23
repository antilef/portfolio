'use client'

import { usePathname } from "next/navigation"
import Link from 'next/link'
import ResumeButton from "@/components/ResumeButton"

const routes = [
    {
        path: '/',
        name: 'home'
    },
    {
        path: '/services',
        name: 'Services'
    },
    {
        path: '/experience',
        name: 'Experience'
    },
    {
        path: '/contact',
        name: 'Contact'
    },
]


const NavBar = () => {

    const currentPath = usePathname();
    console.log(currentPath)

    return (
        <nav className="flex justify-between py-10">
            <div className="px-8">
                <p className="text-5xl border-4">FI</p>
            </div>
            <div className="flex">
                <ul className="flex gap-8">

                    {
                        routes.map((route,index) =>{
                            return (
                                <li key={index} className={ ` ${route.path === currentPath && "border-b-2 border-secondary" } rounded-md h-6 m-auto hover:bg-secondary font-bold`} >
                                    <Link href={route.path} >{route.name} </Link>
                                </li>     
                            )
                        })
                    }
                    <li>
                        <ResumeButton marginClass={'mx-8'}/>
                    </li>
                    
                </ul>
                
            </div>
           
        </nav>

    )
}

export default NavBar