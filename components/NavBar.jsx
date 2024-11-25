'use client'

import { usePathname } from "next/navigation"
import Link from 'next/link'
import ResumeButton from "@/components/ResumeButton"
import { useState } from "react"

const routes = [
    {
        path: '/',
        name: 'home'
    },
    {
        path: '/resume',
        name: 'Resume'
    },
    {
        path: '/work',
        name: 'Work'
    },
    {
        path: '/contact',
        name: 'Contact'
    },
]


const NavBar = () => {

    const currentPath = usePathname();
    const [isOpen,setIsOpen] = useState(false)

    const toggleButton = () => { setIsOpen(!isOpen)}

    const onToggleMenu= (e) =>{
        toggleButton()
        const navLinks = document.querySelector('.nav-links')
        e.name = e.name === 'menu' ? 'close' : 'menu'
        navLinks.classList.toggle('top-[4%]')
    }

    return (
        <>
        <nav className="flex justify-between w-[95%]">
            <div className="px-8 pt-10">
                <p className="text-5xl border-4">FA</p>
            </div>
            
            <div className="nav-links duration-500 md:static 
                        absolute md:min-h-fit min-h-[60vh]
                        left-0 top-[-100%] md:w-auto max-md:bg-primary w-full 
                        flex items-center px-auto z-10 md:justify-center">
                <ul className="flex md:flex-row flex-col mx-auto gap-8">

                    {
                        routes.map((route,index) =>{
                            return (
                                <li  key={index} className={ ` ${route.path === currentPath && "border-b-2 border-secondary" } rounded-md h-6 m-auto hover:bg-secondary font-bold`} >
                                    <Link href={route.path} >{route.name} </Link>
                                </li>     
                            )
                        })

                    }
                    <li className="m-auto">
                        <ResumeButton />
                    </li>
                    
                </ul>
                    
                
            </div>
            <div className="md:hidden mt-10" >
            <a onClick={onToggleMenu} 
                                name="menu" className="text-3xl cursor-pointer 
                                                    md:hidden text-white">{
                                                        isOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>
                                                    }
                        </a>
            </div>
           
        </nav>
    
       
        </>
    )
}

export default NavBar