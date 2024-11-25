

const technologies = [
    {
        class: "fa-brands fa-angular fa-10x", 
    },
    {
        class: "fa-brands fa-java fa-10x", 
    },
    {
        class: "fa-brands fa-js fa-10x", 
    },
    {
        class: "fa-brands fa-golang fa-10x", 
    },
    {
        class: "fa-brands fa-python fa-10x", 
    },
    {
        class: "fa-brands fa-linux fa-10x", 
    },

]

const experiences = [
    {
        date: '2021 - present',
        job: 'Software Engineer',
        company: 'Allware'
    },
    {
        date: '2021 - 2019',
        job: 'Backend Engineer part-time',
        company: 'Motivus'
    }
]

const Services = () => {

    

    return (
        <section>

            <section>
                <h1 className="text-5xl">Experience</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-20">
                    {
                        experiences.map((exp,index)=> {
                            return (
                                <div key={index} className="p-12 m-4 rounded-lg bg-contrast duration-500 hover:scale-105 hover:shadow-xl hover:bg-secondary" >
                                    <div className="flex flex-col h-full">
                                        <p className="text-secondary font-bold">{exp.date}</p>
                                        <p className="text-white text-lg font-bold">{exp.job}</p>
                                        <p className="pt-2 mt-auto">{exp.company}</p>
                                    </div>
                                    
                                </div>
                            )
                            
                        })
                    }
                </div>
            </section>

            <section>
                <h1 className="text-5xl">Skills</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-20">
                    {
                        technologies.map((tech,index)=> {
                            return (
                                <div key={index} className="py-12 m-4 text-center rounded-lg bg-contrast duration-500 hover:scale-105 hover:shadow-xl hover:bg-secondary" >
                                    <i className={tech.class}></i>
                                </div>
                            )
                            
                        })
                    }
                </div>
            </section>
            
        </section>
    )
}

export default Services