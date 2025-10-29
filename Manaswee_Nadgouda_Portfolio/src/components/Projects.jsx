const Card = ({title, points, href}) => (
  <div className="p-6 bg-black/30 rounded-xl hover:shadow-cyan-400/50 transition">
    <h3 className="text-xl font-semibold text-cyan-300 mb-2">{title}</h3>
    <ul className="list-disc list-inside text-cyan-100 text-sm space-y-1">
      {points.map((p,i)=>(<li key={i}>{p}</li>))}
    </ul>
    {href && <a href={href} target="_blank" className="text-cyan-400 underline mt-2 inline-block">GitHub Repo</a>}
  </div>
);

export default function Projects(){
  return (
    <section id="projects" className="relative z-10 py-16 bg-[#0b1120]/80">
      <h2 className="text-3xl font-bold text-center text-cyan-300 mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card title="Password Strength Checker" href="https://github.com/manasweenadgouda22/password-strength-checker"
          points={["FastAPI backend for entropy & policy validation","Real-time scoring + CI/CD integration","Hosted on AWS EC2 with HTTPS enforcement"]} />
        <Card title="Network Forensics Lab" href="https://github.com/manasweenadgouda22"
          points={["Zeek & Suricata for packet inspection","Automated PCAP ingestion with Python","ELK dashboards for anomaly visualization"]} />
        <Card title="Threat Detection Scripts" href="https://github.com/manasweenadgouda22"
          points={["Python CLI for DNS tunneling detection","Async I/O and SIEM integration"]} />
        <Card title="Cloud Deployment Dashboard" href="https://github.com/manasweenadgouda22"
          points={["Serverless AWS backend with Lambda + DynamoDB","Dash-based UI for resource tracking"]} />
        <Card title="AI Email & Chat Forensics" href="https://github.com/manasweenadgouda22/AI-Email-Chat-Forensics"
          points={["Streamlit dashboard for metadata correlation","TF-IDF + ML for phishing/spam detection"]} />
      </div>
    </section>
  )
}
