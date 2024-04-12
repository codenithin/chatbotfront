import React from 'react'
import TableRow from './TableRow'

export default function TableBody() {
    return (
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            <TableRow />
            <tr>
                <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-3">
                        <div className="flex items-center gap-x-3">
                            <img className="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                            <div className="grow">
                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">David Harrison</span>
                                <span className="block text-sm text-gray-500">david@site.com</span>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-3">
                        <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                            <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            Warning
                        </span>
                    </div>
                </td>
                <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-3">
                        <div className="flex items-center gap-x-3">
                            <span className="text-xs text-gray-500">3/5</span>
                            <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100">
                                <div className="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap dark:bg-gray-200" style={{ width: "78%" }}></div>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-3">
                        <span className="text-sm text-gray-500">20 Dec, 09:27</span>
                    </div>
                </td>
            </tr>

            <tr>
                <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-3">
                        <div className="flex items-center gap-x-3">
                            <span className="inline-flex items-center justify-center size-[38px] rounded-full bg-gray-300 dark:bg-gray-700">
                                <span className="font-medium text-gray-800 leading-none dark:text-gray-200">A</span>
                            </span>
                            <div className="grow">
                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Anne Richard</span>
                                <span className="block text-sm text-gray-500">anne@site.com</span>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-3">
                        <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                            Active
                        </span>
                    </div>
                </td>
                <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-3">
                        <div className="flex items-center gap-x-3">
                            <span className="text-xs text-gray-500">5/5</span>
                            <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                <div className="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap dark:bg-gray-200" style={{ width: "100%" }}></div>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-3">
                        <span className="text-sm text-gray-500">18 Dec, 15:20</span>
                    </div>
                </td>
            </tr>

            <tr>
                <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-3">
                        <div className="flex items-center gap-x-3">
                            <img className="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80" alt="Image Description" />
                            <div className="grow">
                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Samia Kartoon</span>
                                <span className="block text-sm text-gray-500">samia@site.com</span>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-3">
                        <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                            Active
                        </span>
                    </div>
                </td>
                <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-3">
                        <div className="flex items-center gap-x-3">
                            <span className="text-xs text-gray-500">0/5</span>
                            <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="100">
                                <div className="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap dark:bg-gray-200" style={{ width: "1%" }}></div>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-3">
                        <span className="text-sm text-gray-500">18 Dec, 15:20</span>
                    </div>
                </td>
            </tr>
        </tbody>
    )
}
