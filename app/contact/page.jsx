export default function Contact(){
    return (
        <section className="flex flex-col lg:flex-row w-full gap-8">
            <div className="bg-contrast w-[50%] rounded-lg p-10">
                <h1 className="text-5xl font-bold text-secondary py-10" >Let's build something</h1>
                <p className="text-slate-300 py-4">I'm loved to respond your message</p>
                <form className="grid grid-cols-2 [&>input]:bg-primary [&>input]:rounded-md [&>input]:px-4 [&>input]:py-4 [&>input]:font-semi-bold gap-4  [&>input]:border-2" >
                    <input className="focus:outline-none focus:border-secondary" type="text" placeholder="Firstname" />
                    <input className="focus:outline-none focus:border-secondary" type="text" placeholder="Lastname" />
                    <input className="focus:outline-none focus:border-secondary" type="text" placeholder="Email" />
                    <input className="focus:outline-none focus:border-secondary" type="text" placeholder="Phone number" />
                    <input className="col-span-2 focus:outline-none focus:border-secondary" type="text" placeholder="Subject " />
                    <textarea type="text" className="font-semi-bold rounded-md bg-primary col-span-2 h-64 py-2 focus:border-secondary focus:outline-none border-2" placeholder="Type your message here " />
                </form>
                <button className="text-slate-300 p-4 bg-secondary rounded-lg my-8" >Send Message</button>
            </div>

            {/* contact */}

            <div className="flex flex-col m-auto gap-8">
                <div className="flex gap-8">
                    <div className="my-auto bg-contrast p-4">
                        <i class="fa-solid fa-phone fa-3x text-secondary"></i>
                    </div>
                    <div className="flex flex-col my-auto gap-2">
                        <p className="text-slate-300 opacity-50">Phone</p>
                        <p className="font-semibold text-white">(+56) 9 55120393</p>
                    </div>
                    
                </div>

                <div className="flex gap-8">
                    <div className="my-auto bg-contrast p-4">
                        <i class="fa-solid fa-envelope fa-3x text-secondary"></i>
                    </div>
                    <div className="flex flex-col my-auto gap-2">
                        <p className="text-slate-300 opacity-50">Email</p>
                        <p className="font-semibold text-white">fi.antilef@gmail.com</p>
                    </div>
                    
                </div>
                <div className="flex gap-8">
                    <div className="my-auto bg-contrast p-4 w-[60px]">
                        <i class="fa-solid fa-location-dot fa-3x text-secondary"></i>
                    </div>
                    <div className="flex flex-col my-auto gap-2">
                        <p className="text-slate-300 opacity-50">Location</p>
                        <p className="font-semibold text-white">Osorno, Chile</p>
                    </div>
                    
                </div>

            </div>
        </section>
    )
}