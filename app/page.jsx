import ResumeButton from "@/components/ResumeButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grow">
      <p className="font-bold text-secondary text-2xl">Hi, I&apos;m </p>
        <h1 className="text-7xl font-bold text-white py-4 mt-10"> Francisco Antilef.</h1>
        <p className="text-6xl text-snow font-bold py-2 mb-10 opacity-50"> Software Engineer.</p>
        <p className="text-xl max-w-screen-md" >Enthusiastic modern developer with <span className="text-secondary">3+ </span> years of professional software development experience and over 6 years of coding expertise.
           Skilled in <span className="text-secondary">Java and Spring Boot</span> and <span className="text-secondary">angular</span></p>
        <div className="flex mt-8">
          <ResumeButton marginClass={'mr-8'}/>
          <div className="flex gap-8 px-20 my-auto">
            <Link href='https://github.com/antilef' target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github fa-2x hover:text-secondary duration-500 hover:scale-105"></i></Link>
            <Link href='https://x.com/antilef_776' target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter fa-2x hover:text-secondary duration-500 hover:scale-105"></i></Link>
            <Link href='https://www.instagram.com/antilef.java' target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram fa-2x hover:text-secondary duration-500 hover:scale-105"></i></Link>
          </div>
        </div>
        
    </div>
  );
}
