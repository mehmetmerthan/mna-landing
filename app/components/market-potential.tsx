'use client'

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, PieChart, Pie, Cell, Tooltip, LineChart, Line, CartesianGrid, Legend } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, DollarSign, TrendingUp } from 'lucide-react'

const globalMAData = [
  { region: 'North America', value: 2500 },
  { region: 'Europe', value: 1800 },
  { region: 'Asia Pacific', value: 1200 },
  { region: 'Latin America', value: 300 },
  { region: 'Middle East & Africa', value: 100 },
]

const industryROIData = [
  { name: 'Tech', roi: 35 },
  { name: 'Healthcare', roi: 28 },
  { name: 'Retail', roi: 20 },
  { name: 'Finance', roi: 15 },
  { name: 'Energy', roi: 12 },
]

const cryptoAdoptionData = [
  { year: 2020, users: 200 },
  { year: 2021, users: 300 },
  { year: 2022, users: 350 },
  { year: 2023, users: 380 },
  { year: 2024, users: 420 },
  { year: 2025, users: 470 },
  { year: 2026, users: 526 },
]

const globalMAVolumeData = [
  { region: 'North America', percentage: 45, color: '#0088FE' },
  { region: 'Europe', percentage: 25, color: '#00C49F' },
  { region: 'Asia-Pacific', percentage: 20, color: '#FFBB28' },
  { region: 'Rest of World', percentage: 10, color: '#FF8042' },
]

const maSuccessRatesData = [
  { year: 2019, traditional: 70, dataAnalytics: 91 },
  { year: 2020, traditional: 72, dataAnalytics: 93 },
  { year: 2021, traditional: 75, dataAnalytics: 97 },
  { year: 2022, traditional: 78, dataAnalytics: 101 },
  { year: 2023, traditional: 80, dataAnalytics: 104 },
]

const financingStructuresData = [
  { name: 'Equity', value: 40 },
  { name: 'Debt', value: 60 },
]

export default function MarketPotential() {
  return (
    <section id="market-potential" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Market Potential and Future Growth
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Explore the immense potential in the global M&A market and the growing crypto landscape.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-full lg:col-span-2">
            <CardHeader>
              <CardTitle>Global M&A Market Size</CardTitle>
              <CardDescription>
                The global mergers and acquisitions (M&A) market is projected to grow to $5.9 trillion by 2030.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={globalMAData}>
                  <XAxis dataKey="region" />
                  <YAxis />
                  <Bar dataKey="value" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Industry Opportunities</CardTitle>
              <CardDescription>
                Industries with the highest potential for acquisition ROI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                {industryROIData.map((industry, index) => (
                  <div key={industry.name} className="mb-2">
                    <div className="flex justify-between text-sm">
                      <span>{industry.name}</span>
                      <span>{industry.roi}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${industry.roi}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-full">
            <CardHeader>
              <CardTitle>Crypto Adoption</CardTitle>
              <CardDescription>
                420 million global crypto users as of 2024, with a 12% annual growth rate.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={cryptoAdoptionData}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Bar dataKey="users" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="col-span-full lg:col-span-2">
            <CardHeader>
              <CardTitle>Global M&A Volume</CardTitle>
              <CardDescription>
                The global M&A market was valued at $3.8 trillion in 2023, with over 40,000 deals completed annually.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-1/2">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={globalMAVolumeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="percentage"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {globalMAVolumeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0 flex flex-col justify-center">
                <h4 className="text-lg font-semibold mb-4">Top Regions</h4>
                {globalMAVolumeData.map((region) => (
                  <div key={region.region} className="flex items-center mb-2">
                    <MapPin className="mr-2" style={{ color: region.color }} />
                    <span>{region.region}: {region.percentage}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-full lg:col-span-1">
            <CardHeader>
              <CardTitle>M&A Success Rates</CardTitle>
              <CardDescription>
                70-90% of acquisitions result in synergies and profit growth when managed well.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={maSuccessRatesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="traditional" stroke="#8884d8" name="Traditional" />
                  <Line type="monotone" dataKey="dataAnalytics" stroke="#82ca9d" name="With Data Analytics" />
                </LineChart>
              </ResponsiveContainer>
              <p className="mt-4 text-sm text-gray-600 text-center">
                Companies using robust data analytics during acquisitions see 30% higher success rates.
              </p>
            </CardContent>
          </Card>

          <Card className="col-span-full">
            <CardHeader>
              <CardTitle>Common M&A Financing Structures</CardTitle>
              <CardDescription>
                Understanding the primary methods of financing mergers and acquisitions.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-1/2">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={financingStructuresData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name} ${value}%`}
                    >
                      <Cell key="cell-0" fill="#0088FE" />
                      <Cell key="cell-1" fill="#00C49F" />
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <div className="mb-4">
                  <h4 className="font-semibold flex items-center">
                    <DollarSign className="mr-2 text-blue-500" />
                    Equity Financing
                  </h4>
                  <p className="text-sm text-gray-600">Using company shares to finance acquisitions.</p>
                </div>
                <div>
                  <h4 className="font-semibold flex items-center">
                    <TrendingUp className="mr-2 text-green-500" />
                    Debt Financing
                  </h4>
                  <p className="text-sm text-gray-600">Leveraged buyouts (LBOs) where loans are used, typically with 60-70% of the purchase price financed through debt.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

