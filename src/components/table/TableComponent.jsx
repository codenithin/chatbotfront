import React from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'

export default function TableComponent({ tableData }) {
    return (
        <table class="min-w-full divide-y divide-gray-200 ">
            <TableHead heads={tableData.tableHead} />
            <TableBody rows={tableData.tableBody} />
        </table>
    )
}
