import Image from 'next/image'
import { LinkedinIcon as LinkedIn, Twitter, Globe } from 'lucide-react'

const teamMembers = [
  {
    name: 'Erkam KAYA',
    role: 'Financial Lead',
    description: 'With years of experience in the industry, our financial expert ensures maximum profitability through strategic company trading and fund management.',
    image: '/placeholder.svg?height=300&width=300',
    socials: [
      { icon: LinkedIn, href: 'https://www.linkedin.com/in/erkamyasirkaya/' },
      { icon: Twitter, href: 'https://twitter.com/ErkamYasirKaya' },
    ],
  },
  {
    name: 'Mehmet Mert HAN',
    role: 'Tech Lead',
    description: 'Having led the development of software infrastructures for various ventures, our developer specializes in building secure and user-friendly solutions.',
    image: '/placeholder.svg?height=300&width=300',
    socials: [
      { icon: LinkedIn, href: 'https://www.linkedin.com/in/mehmetmerthan/' },
      { icon: Globe, href: 'https://mehmetmerthan.me/' },
    ],
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Meet the experts behind our innovative platform
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start space-y-12 md:space-y-0 md:space-x-12">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center max-w-sm">
              <div className="w-48 h-48 mb-6 relative">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-lg font-medium text-blue-600 mb-2">{member.role}</p>
              <p className="text-gray-500 text-center mb-4">{member.description}</p>
              <div className="flex space-x-4">
                {member.socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

