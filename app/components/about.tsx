import { CheckCircle } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Focus on MNA DEFI?
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Investing in MNA DEFI offers a safer and more reliable pathway
            compared to launching traditional startups.
          </p>
        </div>

        <div className="mt-16">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Lower Failure Rates
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Unlike startups, where nearly 90% fail within the first five
                years, acquiring established companies provides access to
                businesses with proven track records and steady revenue streams.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Existing Infrastructure
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Acquired companies already have customers, operational systems,
                and brand recognition, eliminating the uncertainty associated
                with building these from scratch.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Immediate Revenue
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Rather than waiting years for a startup to become profitable,
                acquisitions offer immediate cash flow from day one.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

