'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts'
import { DollarSign, TrendingUp, Briefcase, FileText } from 'lucide-react'

const leverageExample = [
  { name: 'Equity', value: 15 },
  { name: 'Loans', value: 35 },
]

const lboData = [
  { year: '2019', percentage: 18 },
  { year: '2020', percentage: 19 },
  { year: '2021', percentage: 20 },
  { year: '2022', percentage: 21 },
  { year: '2023', percentage: 22 },
]

const loanTypes = [
  { 
    icon: FileText,
    name: 'Term Loans',
    description: 'Fixed loans repaid over a specific period.',
    detail: 'Interest rates: 4-8% on average'
  },
  {
    icon: TrendingUp,
    name: 'Revolving Credit Facilities (RCF)',
    description: 'A flexible line of credit that can be drawn and repaid multiple times.',
    detail: 'Useful for bridging gaps in funding'
  },
  {
    icon: Briefcase,
    name: 'Vendor Financing',
    description: 'The seller offers financing to the buyer, often used in smaller acquisitions.',
    detail: 'Terms negotiated directly between parties'
  },
  {
    icon: DollarSign,
    name: 'Leveraged Buyouts (LBOs)',
    description: 'Using the target company\'s assets as collateral to secure a loan for the acquisition.',
    detail: '20% of global M&A deals annually'
  },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function Loans() {
  return (
    <section id="loans" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Loan Systems in M&A
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Leveraging loans or debt financing can be a powerful strategy to fund company acquisitions, especially when paired with your cryptocurrency model.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-full lg:col-span-2">
            <CardHeader>
              <CardTitle>Benefits of Loan Systems in M&A</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold flex items-center">
                    <TrendingUp className="mr-2 text-blue-500" />
                    Leverage and Scale
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">By using debt, you can acquire larger companies without fully diluting equity or token value.</p>
                  <div className="mt-4">
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={leverageExample}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, value }) => `${name}: $${value}M`}
                        >
                          {leverageExample.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                    <p className="text-sm text-center mt-2">Example: A $50M company acquisition</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold flex items-center">
                    <DollarSign className="mr-2 text-green-500" />
                    Tax Advantages
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">Interest on acquisition loans is often tax-deductible, reducing overall cost.</p>
                  <p className="text-sm font-semibold mt-2">Statistic: Tax savings on leveraged deals can range between 5-10% of the total acquisition cost annually.</p>
                </div>
                <div>
                  <h4 className="font-semibold flex items-center">
                    <Briefcase className="mr-2 text-purple-500" />
                    Lower Upfront Costs
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">Allows your project to reserve capital for operational improvements or further acquisitions.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>LBO Trends</CardTitle>
              <CardDescription>
                Leveraged Buyouts (LBOs) account for a significant portion of global M&A deals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={lboData}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="percentage" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-sm text-center mt-4">Percentage of global M&A deals that are LBOs</p>
            </CardContent>
          </Card>

          <Card className="col-span-full">
            <CardHeader>
              <CardTitle>Types of Loans for M&A</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {loanTypes.map((loan, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow">
                    <loan.icon className="w-8 h-8 text-blue-500 mb-2" />
                    <h4 className="font-semibold mb-2">{loan.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{loan.description}</p>
                    <p className="text-sm font-medium text-blue-600">{loan.detail}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

