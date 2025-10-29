import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'
import Chatbot from './components/Chatbot.jsx'

export default function App(){
  return (
    <div className="min-h-screen font-poppins relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/cyber-grid.svg')] opacity-20"></div>
      <div id="glow" className="pointer-events-none fixed w-[420px] h-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl z-0 hidden md:block"></div>
      <script dangerouslySetInnerHTML={{__html:`
        const glow = document.getElementById('glow');
        window.addEventListener('mousemove', (e)=>{
          if(!glow) return;
          glow.style.left = e.clientX+'px';
          glow.style.top = e.clientY+'px';
        });
      `}} />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Chatbot />
    </div>
  )
}
