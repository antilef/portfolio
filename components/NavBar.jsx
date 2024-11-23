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
    const [isOpen,setIsOpen] = useState(false)

    const toggleButton = () => { setIsOpen(!isOpen)}

    return (
        <>
        <nav className=" hidden lg:flex justify-between py-10 w-full ">
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
                    <li className="m-auto">
                        <ResumeButton marginClass={'mx-8'}/>
                    </li>
                    
                </ul>
                
            </div>
           
        </nav>
        <nav className="lg:hidden flex justify-between w-full p-10">
            <div className={` ${isOpen? 'hidden':'flex'}`} >
                <p className="text-4xl border-2 ">FI</p>
            </div>
            <div className="flex items-center ml-auto cursor-pointer">
                <button type="button" onClick={toggleButton}>
                    {
                        isOpen ? 'Close' : (
                            <svg 
                              className="w-6 h-6" 
                              aria-hidden="true" 
                              xmlns="http://www.w3.org/2000/svg" 
                              fill="none" 
                              viewBox="0 0 17 14"
                            >
                              <path 
                                stroke="currentColor" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M1 1h15M1 7h15M1 13h15"
                              />
                            </svg>
                          )
                    }
                
                </button>
            </div>
            <div className={`lg:hidden ${isOpen ? 'flex flex-col': 'hidden'} fixed top-0 left-0 w-screen bg-gray-800 z-30 items-center 
            transition-all duration-500 ease-in-out transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-100%]'}`}>    
                <ul>
                    {
                        routes.map((route,index) =>{
                            return (
                                <li onClick={toggleButton} key={index} className={ `text-center my-10 m-auto font-bold`} >
                                    <Link href={route.path} >{route.name} </Link>
                                </li>     
                            )
                        })
                    }

                    <li>
                        <ResumeButton marginClass={'mx-8 mb-10'}/>
                    </li>

                    <li className="text-center mb-10">
                        <button type="button" onClick={toggleButton}>
                        {
                            isOpen ? 'Close' : (
                                <svg 
                                className="w-6 h-6" 
                                aria-hidden="true" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 17 14"
                                >
                                <path 
                                    stroke="currentColor" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                                </svg>
                            )
                        }
                        </button>
                    </li>
                </ul> 
                
            </div>
            
        </nav>
       
        </>
    )
}

export default NavBar