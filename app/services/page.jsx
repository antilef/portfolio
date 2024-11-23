import Image from "next/image"
import Link from "next/link"

const Services = () => {
    return (
        <section>
            <section>
                <h1 className="text-7xl">Main Skills</h1>
                <div className="grid grid-row-1 md:grid-cols-2 md:grid-flow-col lg:grid-cols-3 lg:grid-flow-col gap-4 my-40">
                    <div className="p-4 text-center" >
                        <Image
                            width={400}
                            height={400}
                            priority
                            src={"/java-svgrepo-com.svg"}
                            alt='java icon'
                        />
                        <p className="mt-10 text-3xl">Java</p>
                    </div>
                    <div className="p-4 text-center"  >
                        <Image
                            width={400}
                            height={400}
                            priority
                            src={"/spring-boot-svgrepo-com.svg"}
                            alt='java icon'
                        />
                        <p className="mt-10 text-3xl">Spring Boot</p>
                    </div>
                    <div className="p-4 text-center" >
                        <Image
                            width={400}
                            height={400}
                            priority
                            src={"/angular-svgrepo-com.svg"}
                            alt='java icon'
                        />
                        <p className="mt-10 text-3xl">Angular</p>
                    </div>
                </div>
            </section>
            <section className="mb-20">
                <h1 className="text-5xl">Projects</h1>
                <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                    <div className="w-72 bg-snow   shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <Link href={'https://github.com/antilef/ch-tv-plan'} >
                            {/* <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" /> */}
                            <Image
                            className="h-80 w-72 object-cover rounded-t-xl"
                            width={400}
                            height={400}
                            priority
                            src={"/angular-svgrepo-com.svg"}
                            alt='java icon'
                            />      
                            <div className="px-4 py-3 w-72">
                                <span className="text-gray-400 mr-3 uppercase text-xs">Java</span>
                                <p className="text-lg font-bold text-black truncate block capitalize">Change Plan RESTful API</p>
                                <div className="flex items-center">
                                    <Image
                                        className="mr-2"
                                        width={20}
                                        height={20}
                                        priority
                                        src={"/github-svgrepo-com.svg"}
                                        alt='java icon'
                                    />
                                    <p className="text-black m-2"> Available</p>
                                    
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Services