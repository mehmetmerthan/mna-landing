import { Shield, Zap, Eye, PieChart, TrendingUp, BarChart3, Building, Users, Globe } from 'lucide-react'

const features = [
  {
    title: 'How Blockchain Enhances the Process',
    description: 'By integrating blockchain technology, we provide a secure, transparent, and efficient way to fund and manage company acquisitions:',
    items: [
      {
        icon: Users,
        title: 'Decentralized Decision-Making',
        description: 'Token holders are actively involved in decision-making through a secure voting system, ensuring their voices shape the acquisitions.'
      },
      {
        icon: Zap,
        title: 'Efficient Transactions',
        description: 'Blockchain enables faster and lower-cost transfers of funds, compared to traditional financing methods.'
      },
      {
        icon: Eye,
        title: 'Transparent Operations',
        description: 'All financial and operational decisions are recorded on the blockchain, ensuring complete transparency and trust.'
      }
    ]
  },
  {
    title: 'Benefits of Investing with Us',
    description: 'Our innovative model blends the security of company acquisitions with the accessibility of cryptocurrency:',
    items: [
      {
        icon: PieChart,
        title: 'Profit Sharing',
        description: 'As a token holder, you\'re entitled to regular profit distributions from the acquired companies.'
      },
      {
        icon: TrendingUp,
        title: 'Growing Token Value',
        description: 'As the portfolio of acquired companies grows, so does the intrinsic value of your tokens.'
      },
      {
        icon: Shield,
        title: 'Reduced Risk',
        description: 'By acquiring multiple companies across industries, we diversify the portfolio, minimizing risk and maximizing potential returns.'
      }
    ]
  },
  {
    title: 'Why This Model Works',
    description: 'Our unique approach combines traditional business with cutting-edge technology:',
    items: [
      {
        icon: Building,
        title: 'Real-World Assets Meet Blockchain Innovation',
        description: 'Unlike many speculative crypto projects, your investment is tied to tangible, revenue-generating businesses.'
      },
      {
        icon: Users,
        title: 'Shared Success',
        description: 'Our platform ensures that token holders share in both decision-making and the financial success of the companies we acquire.'
      },
      {
        icon: Globe,
        title: 'Accessible to All',
        description: 'With our blockchain-based system, anyone can participate in corporate acquisitions, breaking down barriers to traditional investment opportunities.'
      }
    ]
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Unique Features
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover how our innovative platform revolutionizes company acquisitions through blockchain technology.
          </p>
        </div>

        <div className="mt-20">
          {features.map((feature, index) => (
            <div key={index} className={`mb-20 ${index % 2 === 0 ? '' : 'bg-gray-50 -mx-4 px-4 py-8 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'}`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-lg text-gray-500 mb-8">{feature.description}</p>
              <div className="grid gap-8 md:grid-cols-3">
                {feature.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="relative">
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div className="ml-16">
                      <h4 className="text-lg font-medium text-gray-900">{item.title}</h4>
                      <p className="mt-2 text-base text-gray-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

