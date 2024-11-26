'use client'

import { useState } from "react"


export default function Contact(){

    const [formData,setFormData] = useState({firstname: '',lastname: '',email: '', phoneNumber:'',subject: '',message: ''})
    const [status,setStatus] = useState('status')

    const handleChange = (e) => {
        const { name,value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('Sending...')
        

        try{
            const response = await fetch('/api/send-email',{
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setStatus('Message sent successfully!');
              } else {
                setStatus('Failed to send message. Please try again.');
            }
        }catch(e){
            setStatus('Something was wrong. Please try again')
        }

    }


    return (
        <section className="flex flex-col lg:flex-row w-full gap-8">
            <div className="bg-contrast lg:w-[50%] md:w-[100%] rounded-lg p-10">
                <h1 className="text-5xl font-bold text-secondary py-10" >Let&apos;s build something</h1>
                <p className="text-slate-300 py-4">I&apos;m loved to respond your message</p>
                <form className="grid grid-cols-2 [&>input]:bg-primary [&>input]:rounded-md [&>input]:px-4 [&>input]:py-4 [&>input]:font-semi-bold gap-4  [&>input]:border-2" >
                    <input required onChange={handleChange} className="focus:outline-none focus:border-secondary" name='firstname' value={formData.firstname} type="text" placeholder="Firstname" />
                    <input onChange={handleChange}  className="focus:outline-none focus:border-secondary" name='lastname' value={formData.lastname} type="text" placeholder="Lastname" />
                    <input required onChange={handleChange}  className="focus:outline-none focus:border-secondary" name='email' value={formData.email} type="email" placeholder="Email" />
                    <input onChange={handleChange}  className="focus:outline-none focus:border-secondary" name='phoneNumber' type="text" value={formData.phoneNumber} placeholder="Phone number" />
                    <input onChange={handleChange} className="col-span-2 focus:outline-none focus:border-secondary" name='subject' type="text" value={formData.subject} placeholder="Subject " />
                    <textarea required onChange={handleChange}  type="text" value={formData.message} name='message' className="font-semi-bold rounded-md bg-primary col-span-2 h-64 py-2 focus:border-secondary focus:outline-none border-2" placeholder="Type your message here " />
                </form>
                <button onClick={handleSubmit} className="text-slate-300 p-4 bg-secondary rounded-lg my-8" >Send Message</button>
            </div>

            {/* contact */}

            <div className="flex flex-col m-auto gap-8">
                <div className="flex gap-8">
                    <div className="my-auto bg-contrast p-4">
                        <i className="fa-solid fa-phone fa-3x text-secondary"></i>
                    </div>
                    <div className="flex flex-col my-auto gap-2">
                        <p className="text-slate-300 opacity-50">Phone</p>
                        <p className="font-semibold text-white">(+56) 9 55120393</p>
                    </div>
                    
                </div>

                <div className="flex gap-8">
                    <div className="my-auto bg-contrast p-4">
                        <i className="fa-solid fa-envelope fa-3x text-secondary"></i>
                    </div>
                    <div className="flex flex-col my-auto gap-2">
                        <p className="text-slate-300 opacity-50">Email</p>
                        <p className="font-semibold text-white">fi.antilef@gmail.com</p>
                    </div>
                    
                </div>
                <div className="flex gap-8">
                    <div className="my-auto bg-contrast p-4 w-[60px]">
                        <i className="fa-solid fa-location-dot fa-3x text-secondary"></i>
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