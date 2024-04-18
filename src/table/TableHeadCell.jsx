import React from 'react'

export default function TableHeadCell({ text }) {
    return (
        <th scope="col" class="px-6 py-3 text-start">
            <div class="flex items-center gap-x-2">
                <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                    {text == '$check$' ? <input type="checkbox" class="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-main" />
                     : text}
                    </span>
            </div>
        </th>
    )
}
