import { useState } from 'react'
import { MessageSquare, X } from 'lucide-react'

export default function Chatbot(){
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{from:'bot', text:'Hi! I am your security assistant. Ask me about AWS, SOC, or Blue Team tools.'}])
  const [input, setInput] = useState('')

  const send = () => {
    if(!input.trim()) return
    const userMsg = {from:'you', text: input.trim()}
    setMessages(m=>[...m, userMsg])

    const lower = input.toLowerCase()
    let reply = "Got it. (Offline demo bot)"
    if(lower.includes('aws')) reply = "Tip: Use IAM least privilege and enable CloudTrail + GuardDuty for detections."
    if(lower.includes('siem') || lower.includes('soc')) reply = "Blue Team hint: Normalize logs and create detections for authentication anomalies."
    if(lower.includes('dns')) reply = "Detect DNS tunneling using length, entropy, and request rate features."

    const botMsg = {from:'bot', text: reply}
    setMessages(m=>[...m, botMsg])
    setInput('')
  }

  return (
    <>
      <button onClick={()=>setOpen(!open)} className="fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-400 text-black p-4 rounded-full shadow-lg z-50">
        {open ? <X /> : <MessageSquare />}
      </button>
      {open && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-[#020617] border border-cyan-400 rounded-xl p-4 shadow-[0_0_20px_#0ff] text-sm overflow-auto z-50">
          <p className="font-semibold text-cyan-300">Cyber Bot</p>
          <div className="mt-2 space-y-2">
            {messages.map((m,i)=>(
              <div key={i} className={m.from==='bot' ? 'text-cyan-200' : 'text-cyan-100 text-right'}>{m.text}</div>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Type your question..."
              className="flex-1 px-2 py-1 bg-black/40 border border-cyan-600 rounded-md text-cyan-100"/>
            <button onClick={send} className="px-3 py-1 bg-cyan-500 text-black rounded-md">Send</button>
          </div>
        </div>
      )}
    </>
  )
}
