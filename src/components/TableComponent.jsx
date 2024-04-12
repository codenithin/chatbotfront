import React from 'react'
import TableHead from '../table/TableHead'
import TableBody from '../table/TableBody'

export default function TableComponent({ tableData }) {
    return (
        <div className="grow max-w-[90%] md:max-w-2xl w-full space-y-3">
            {/* <!-- Table Section --> */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                {/* <!-- Table --> */}
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <TableHead heads={tableData.heads} />

                            <TableBody />
                        </table>
                    </div>
                </div>
                {/* <!-- End Table --> */}
            </div>
        </div>
    )
}
