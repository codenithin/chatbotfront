import React, { useState } from 'react'
import ApexChart from 'react-apexcharts'
export default function Chart({ options, series, chartType, width, height }) {
    return (
        <div>
            <ApexChart options={options} series={series} type={chartType ? chartType : 'bar'} width={width ? width : 500} height={height ? height : 320} />
        </div>
    )
}
