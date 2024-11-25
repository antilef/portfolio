export default function Contact(){
    return (
        <section className="flex w-full">
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
            <div className="flex flex-col m-auto gap-8">
                <div>
                    <p>phone</p>
                </div>

                <div>
                    <p>email</p>
                </div>
                <div>
                    <p>address</p>
                </div>

            </div>
        </section>
    )
}