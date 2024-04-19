import React from 'react'
import TableHeadCell from './TableHeadCell'

export default function TableHead({ heads = [] }) {
    return (
        <thead className="bg-gray-50    ">
            <tr>
                {heads.map((head, index) => <TableHeadCell key={index} text={head} />)}
            </tr>
        </thead>
    )
}
