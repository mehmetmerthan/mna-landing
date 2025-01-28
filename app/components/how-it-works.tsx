import { Search, Vote, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Opportunity Identification',
    description: 'We identify promising acquisition targets with high ROI potential.',
    data: 'Average projected ROI: 25% in the first year'
  },
  {
    icon: Vote,
    title: 'Voting Mechanism',
    description: 'Token holders participate in decision-making through secure voting.',
    data: '70% of holders actively vote on acquisitions'
  },
  {
    icon: TrendingUp,
    title: 'Acquisition Results',
    description: 'We complete the acquisition and implement growth strategies.',
    data: 'Average 40% revenue increase post-acquisition'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Take the First Step
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Join a groundbreaking approach to investments. Together, we can build a diversified portfolio of successful companies while embracing the future of decentralized finance.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 top-6 w-1 bg-blue-200 h-[calc(100%-3rem)]"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative mb-16 last:mb-0 pl-16">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center z-10">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Step {index + 1}: {step.title}</h3>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-base text-gray-500 mb-2">{step.description}</p>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="text-sm font-semibold text-blue-600">{step.data}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

