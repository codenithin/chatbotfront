import React, { useState } from 'react'
import ApexChart from 'react-apexcharts'
export default function SingleLineChart() {
    const [options, setOptions] = useState({
        chart: {
            id: 'chart 1',
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
    })
    const [series, setSeries] = useState([{
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }])
  return (
    <div>
        <ApexChart options={options} series={series} type="line" width={500} height={320} />
    </div>
  )
}
