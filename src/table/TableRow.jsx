import React from 'react'
import NameCell from './cells/NameCell'
import StatusCell from './cells/StatusCell'
import PortfolioCells from './cells/PortfolioCells'
import CreatedCell from './cells/CreatedCell'

export default function TableRow({headTypes, row}) {
    return (
        <tr>
            <NameCell />
            <StatusCell />
            <PortfolioCells />
            <CreatedCell />
            
            <td className="size-px whitespace-nowrap">
                <div className="px-6 py-3">
                    <div className="flex items-center gap-x-3">
                        <span className="text-xs text-gray-500">1/5</span>
                        <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap dark:bg-gray-200" style={{ width: "25%" }}></div>
                        </div>
                    </div>
                </div>
            </td>
            <td className="size-px whitespace-nowrap">
                <div className="px-6 py-3">
                    <span className="text-sm text-gray-500">28 Dec, 12:12</span>
                </div>
            </td>
        </tr>
    )
}
