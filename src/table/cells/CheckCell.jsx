import React, { useState } from 'react'

export default function CheckCell({check}) {
    const [c, setC] = useState(check)
    return (
        <td className="size-px whitespace-nowrap">
            <div className="ps-6 py-2">
                <label for="hs-at-with-checkboxes-1" className="flex">
                    <input type="checkbox" onChange={() => {
                        setC(!c)
                    }} checked={c} className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none   " id="hs-at-with-checkboxes-1" />
                        <span className="sr-only">Checkbox</span>
                </label>
            </div>
        </td>
    )
}
