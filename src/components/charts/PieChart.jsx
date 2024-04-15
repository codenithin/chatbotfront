import React, { useState } from 'react'
import ApexChart from 'react-apexcharts'
export default function PieChart() {
    const [series, setSeries] = useState([{
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }])
      const [labels, setLabels] = useState([
        "Apple", 
        "Mango", 
        "Banana", 
        "Papaya", 
        "Orange"
    ])
  return (
    <div>
        <ApexChart labels={labels} options={options} series={series} type="pie" width={500} height={320} />
    </div>
  )
}
