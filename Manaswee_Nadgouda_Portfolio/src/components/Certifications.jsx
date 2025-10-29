export default function Certifications(){
  const Item = ({text}) => (
    <div className="bg-black/40 p-4 rounded-xl w-60 shadow-md hover:shadow-cyan-300/50 transition">
      <h3 className="font-semibold">{text}</h3>
    </div>
  );
  return (
    <section id="certifications" className="relative z-10 py-16 bg-[#0b1120]/80 text-center">
      <h2 className="text-3xl font-bold text-cyan-300 mb-8">Certifications</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <Item text="ISC² Certified in Cybersecurity (CC)" />
        <Item text="AWS Academy Cloud Foundations" />
        <Item text="CompTIA Security+ (In Progress)" />
      </div>
    </section>
  )
}
