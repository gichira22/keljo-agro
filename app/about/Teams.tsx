import Image from 'next/image';

const TEAM_MEMBERS = [
  { name: "Keneddy Nemke", position: "Chief Executive Officer", image: "/about/keneddy-nemke.png" },
  { name: "Ava Zhang", position: "Chief Technology Officer", image: "/about/ava-zhang.png" },
  { name: "Marcus Lee", position: "Head of Marketing", image: "/about/marcus-lee.png" },
  { name: "Fatima Ali", position: "Lead Product Designer", image: "/about/fatima-ali.png" },
  { name: "Sarah Johnson", position: "Chief Operating Officer", image: "/about/sarah-johnson.png" },
  { name: "Michael Chen", position: "Head of Finance", image: "/about/michael-chen.png" },
  { name: "Emma Wilson", position: "Product Manager", image: "/about/emma-wilson.png" },
  { name: "David Brown", position: "UX Researcher", image: "/about/david-brown.png" }
];

export default function Teams() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
}

function TeamCard({ member }: { member: typeof TEAM_MEMBERS[0] }) {
  return (
    <div className="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      
      {/* Image Container - Full width */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-xl p-4">
        <Image
          src={member.image}
          alt={`${member.name} - ${member.position}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 text-center group-hover:bg-gray-50 transition-colors duration-300">
        <h3 className="text-lg font-semibold text-[#0F0F0F] mb-2">
          {member.name}
        </h3>
        <p className="text-[#0F0F0F] font-medium ">
          {member.position}
        </p>
      </div>

    </div>
  );
}