
import React, { useState } from 'react'
import ApexChart from 'react-apexcharts'
export default function DoubleBarChart() {
  const [options, setOptions] = useState({
    chart: {
      id: 'chart 1',
    },
    xaxis: {
      categories: ["VendorA", "VendorB", "VendorC", "VendorD"]
    }
  })
  const [series, setSeries] = useState([{
    name: 'Annual Fees',
    data: [30, 40, 35, 50]
  }, {
    name: 'TCO Over 3 Years',
    data: [60, 80, 95, 120]
  }])
  return (
    <div>
      <ApexChart options={options} series={series} type="bar" width={500} height={320} />
    </div>
  )
}