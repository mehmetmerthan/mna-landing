'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, LineChart, Line } from 'recharts'
import { CheckCircle, XCircle, Clock, TrendingUp, DollarSign, AlertTriangle } from 'lucide-react'

const successRatesData = [
  { name: 'Startups', success: 10, failure: 90 },
  { name: 'M&A', success: 80, failure: 20 },
]

const revenueTimelineData = [
  { year: 0, ma: 100, startup: 0 },
  { year: 1, ma: 110, startup: 0 },
  { year: 2, ma: 125, startup: 0 },
  { year: 3, ma: 140, startup: 20 },
  { year: 4, ma: 160, startup: 40 },
  { year: 5, ma: 180, startup: 60 },
]

const riskFactorsData = [
  { name: 'M&A', value: 30 },
  { name: 'Startups', value: 70 },
]

const profitabilityData = [
  { name: 'M&A', value: 80 },
  { name: 'Startups', value: 10 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const ComparisonItem = ({ title, ma, startup }) => (
  <div className="flex items-center justify-between py-2 border-b last:border-b-0">
    <span className="font-medium">{title}</span>
    <div className="flex space-x-4">
      <span className="text-blue-600">{ma}</span>
      <span className="text-green-600">{startup}</span>
    </div>
  </div>
)

export default function Comparison() {
  return (
    <section id="comparison" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            M&A vs Startups: A Comprehensive Comparison
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover why M&A strategies often outperform traditional startup investments.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-full">
            <CardHeader>
              <CardTitle>Success Rates Comparison</CardTitle>
              <CardDescription>
                M&A success rates significantly outperform startup success rates.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={successRatesData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="success" fill="#0088FE" name="Success" />
                  <Bar dataKey="failure" fill="#FF8042" name="Failure" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-gray-600">
                <p>M&A: 70-90% success rate when managed effectively</p>
                <p>Startups: Only 10% succeed in becoming profitable businesses</p>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-full lg:col-span-2">
            <CardHeader>
              <CardTitle>Revenue Generation Timeline</CardTitle>
              <CardDescription>
                M&A provides immediate revenue, while startups typically take years to generate consistent revenue.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueTimelineData}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="ma" stroke="#0088FE" name="M&A" />
                  <Line type="monotone" dataKey="startup" stroke="#00C49F" name="Startup" />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-gray-600">
                <p>M&A: Revenue growth begins immediately (0 years)</p>
                <p>Startups: Revenue generation delayed by 3-5 years</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Risk Factors</CardTitle>
              <CardDescription>
                M&A risks can be mitigated with strategic planning.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={riskFactorsData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {riskFactorsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-gray-600">
                <p>M&A: Poor integration planning causes 30% of failures</p>
                <p>Startups: 42% fail due to lack of product-market fit</p>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-full">
            <CardHeader>
              <CardTitle>Key Takeaways</CardTitle>
              <CardDescription>
                M&A outperforms startups in risk-adjusted returns and offers greater diversification potential.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="font-medium"></span>
                  <div className="flex space-x-4 font-bold">
                    <span className="text-blue-600">M&A</span>
                    <span className="text-green-600">Startups</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <span className="font-medium">Success Rate</span>
                  <div className="flex space-x-4">
                    <span className="text-blue-600">70-90%</span>
                    <span className="text-green-600">10%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <span className="font-medium">Time to Revenue</span>
                  <div className="flex space-x-4">
                    <span className="text-blue-600">Immediate (0 years)</span>
                    <span className="text-green-600">3-5 years</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <span className="font-medium">Risk Factors</span>
                  <div className="flex space-x-4">
                    <span className="text-blue-600">Manageable</span>
                    <span className="text-green-600">High</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <span className="font-medium">Average ROI</span>
                  <div className="flex space-x-4">
                    <span className="text-blue-600">15-25%</span>
                    <span className="text-green-600">Rarely positive</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>



        </div>
      </div>
    </section>
  )
}

