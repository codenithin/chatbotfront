import React from 'react'
import TableRow from './TableRow'

export default function TableBody({rows}) {
    return (
        <tbody className="divide-y divide-gray-200  ">
            {
                rows.map((row, index) => {
                    return <TableRow key={index} row={row} />
                })
            }
        </tbody>
    )
}
