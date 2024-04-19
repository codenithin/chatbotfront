import React from 'react'

export default function TextCell({ text, smallText }) {
    return (
        <td className="size-px whitespace-nowrap">
            <div className="px-6 py-2">
                <span className="text-sm text-gray-600  ">{text}</span>
            </div>
        </td>
    )
}
