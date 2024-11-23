export default function ResumeButton({marginClass}) {
    return (
        <a href="/Francisco_Antilef_CV.pdf" download>
            <button  className={`py-2 px-10 ${marginClass} border-2 border-secondary`}>Resume</button> 
        </a>
    )
}