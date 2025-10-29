import TypeIt from 'typeit'
import { useEffect } from 'react'

export default function Hero(){
  useEffect(()=>{
    new TypeIt('#typeit', { strings:['Blue Team Engineer','Cloud & Cybersecurity Specialist','Building Secure Systems'], speed:50, breakLines:false, loop:true }).go();
  },[]);

  return (
    <section className="relative z-10 flex flex-col items-center text-center py-24 hero">
      <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/10" />
      <img src="/avatar.png" alt="avatar" className="w-40 h-40 rounded-full border-2 border-cyan-400 shadow-[0_0_30px_#22d3ee] relative z-10" />
      <h1 className="mt-6 text-4xl font-bold text-cyan-300 relative z-10">Manaswee Balvant Nadgouda</h1>
      <div id="typeit" className="text-lg text-cyan-200 mt-3 relative z-10"></div>
      <div className="mt-6 flex flex-wrap justify-center gap-4 relative z-10">
        <a href="#projects" className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 rounded-lg text-black font-semibold">View Projects</a>
        <a href="https://www.linkedin.com/in/mnadgoud22/" target="_blank" className="px-4 py-2 border border-cyan-300 rounded-lg">LinkedIn</a>
        <a href="https://github.com/manasweenadgouda22" target="_blank" className="px-4 py-2 border border-cyan-300 rounded-lg">GitHub</a>
        <a href="/Manaswee%20Balvant%20Nadgouda%20Resume1.pdf" target="_blank" className="px-4 py-2 bg-cyan-400 hover:bg-cyan-300 rounded-lg text-black font-semibold">Download Resume</a>
      </div>
    </section>
  )
}
