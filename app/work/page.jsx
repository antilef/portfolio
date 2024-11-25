export default function Experience(){
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
    return (
        <section className="mb-20">
                <h1 className="text-5xl">Projects</h1>
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-20">
                {
                        technologies.map((tech,index)=> {
                            return (
                                <div key={index} className="py-12 m-4 text-center rounded-lg bg-contrast duration-500 hover:scale-105 hover:shadow-xl" >
                                    <i className={tech.class}></i>
                                </div>
                            )
                            
                        })
                    }
                </section>
        </section>
    )
}