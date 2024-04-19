import React from 'react'
import TableHead from '../table/TableHead'
import TableBody from '../table/TableBody'

export default function TableComponent({ tableData }) {
    return (
        <table class="min-w-full divide-y divide-gray-200 ">
            <TableHead heads={tableData.tableHead} />
            <TableBody rows={tableData.tableBody} />
        </table>
    )
}
