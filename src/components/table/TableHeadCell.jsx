import React from 'react'

export default function TableHeadCell({ text }) {
    return (
        <th scope="col" className="px-6 py-3 text-start">
            <div className="flex items-center gap-x-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800    ">
                    {text == '$check$' ? <input type="checkbox" className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  " id="hs-at-with-checkboxes-main" />
                     : text}
                    </span>
            </div>
        </th>
    )
}
