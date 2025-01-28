import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Features from './components/features'
import HowItWorks from './components/how-it-works'
import MarketPotential from './components/market-potential'
import Loans from './components/loans'
import Comparison from './components/comparison'
import Team from './components/team'
import Footer from './components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <MarketPotential />
        <Comparison />
      </main>
      <Footer />
    </div>
  )
}

