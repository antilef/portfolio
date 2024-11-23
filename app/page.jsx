import ResumeButton from "@/components/ResumeButton";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="grow">
      <p className="font-bold text-secondary text-2xl">Hi, I'm </p>
        <h1 className="text-7xl font-bold text-white py-4 mt-10"> Francisco Antilef.</h1>
        <p className="text-6xl text-snow font-bold py-2 mb-10 opacity-50"> Software Engineer.</p>
        <p className="text-xl max-w-screen-md" >Enthusiastic modern developer with <span className="text-secondary">3+ </span> years of professional software development experience and over 6 years of coding expertise.
           Skilled in <span className="text-secondary">Java and Spring Boot</span> and <span className="text-secondary">angular</span></p>
        <ResumeButton marginClass={'mt-8'}/>
    </div>
  );
}
