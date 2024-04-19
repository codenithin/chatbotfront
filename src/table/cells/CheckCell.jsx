import React, { useState } from 'react'

export default function CheckCell({check}) {
    const [c, setC] = useState(check)
    return (
        <td class="size-px whitespace-nowrap">
            <div class="ps-6 py-2">
                <label for="hs-at-with-checkboxes-1" class="flex">
                    <input type="checkbox" onChange={() => {
                        setC(!c)
                    }} checked={c} class="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none   " id="hs-at-with-checkboxes-1" />
                        <span class="sr-only">Checkbox</span>
                </label>
            </div>
        </td>
    )
}