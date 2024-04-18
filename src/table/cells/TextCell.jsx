import React from 'react'

export default function TextCell({ text, smallText }) {
    return (
        <td class="size-px whitespace-nowrap">
            <div class="px-6 py-2">
                <span class="text-sm text-gray-600 dark:text-neutral-400">{text}</span>
            </div>
        </td>
    )
}
