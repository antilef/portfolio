const NavBar = () => {
    return (
        <nav className="flex justify-between py-10">
            <div className="px-8">
                <p className="text-5xl">FI</p>
            </div>
            <div className="flex">
                <ul className="flex gap-8 max-h-5">
                    <li className="hover:bg-pink-700 font-bold">Services</li>
                    <li>Experience</li>
                    <li>Contact</li>
                    <li><button className="px-8 mx-8 ">Resume</button></li>
                    
                </ul>
                
            </div>
           
        </nav>
    )
}

export default NavBar