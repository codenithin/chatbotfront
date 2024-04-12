import React from 'react'

export default function NameCell() {
    return (
        <td className="size-px whitespace-nowrap">
            <div className="px-6 py-3">
                <div className="flex items-center gap-x-3">
                    <img className="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                    <div className="grow">
                        <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Christina Bersh</span>
                        <span className="block text-sm text-gray-500">christina@site.com</span>
                    </div>
                </div>
            </div>
        </td>
    )
}
