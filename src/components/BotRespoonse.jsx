import React, { useEffect, useRef, useState } from 'react'
import TableComponent from './TableComponent'

export default function BotRespoonse({ prompt, scroll }) {
    const [botRespoonse, setBotResponse] = useState("Thinking...")
    const [table, setTable] = useState(null)
    const fetchResponse = async (prompt) => {
        // const res = await fetch(BASE_URL + '/send', {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json"
        //   },
        //   body: JSON.stringify({
        //     text
        //   })
        // })
        // const response = await res.json()
        const response = {
            data: {
                type: "text",
                table: '<div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700"> <div class="-m-1.5 overflow-x-auto"> <div class="p-1.5 min-w-full inline-block align-middle"> <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"> <thead class="bg-gray-50 dark:bg-slate-800"> <tr> <th scope="col" class="px-6 py-3 text-start"> <div class="flex items-center gap-x-2"> <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"> Name </span> </div> </th> <th scope="col" class="px-6 py-3 text-start"> <div class="flex items-center gap-x-2"> <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"> Status </span> </div> </th> <th scope="col" class="px-6 py-3 text-start"> <div class="flex items-center gap-x-2"> <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"> Portfolio </span> </div> </th> <th scope="col" class="px-6 py-3 text-start"> <div class="flex items-center gap-x-2"> <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"> Created </span> </div> </th> </tr> </thead> <tbody class="divide-y divide-gray-200 dark:divide-gray-700"> <tr> <td class="size-px whitespace-nowrap"> <div class="px-6 py-3"> <div class="flex items-center gap-x-3"> <img class="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" /> <div class="grow"> <span class="block text-sm font-semibold text-gray-800 dark:text-gray-200">Christina Bersh</span> <span class="block text-sm text-gray-500">christina@site.com</span> </div> </div> </div> </td> <td class="size-px whitespace-nowrap"> <div class="px-6 py-3"> <span class="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"> <svg class="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/> </svg> Active </span> </div> </td> <td class="size-px whitespace-nowrap"> <div class="px-6 py-3"> <div class="flex items-center gap-x-3"> <span class="text-xs text-gray-500">1/5</span> <div class="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> <div class="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap dark:bg-gray-200" style="width: 25%"></div> </div> </div> </div> </td> <td class="size-px whitespace-nowrap"> <div class="px-6 py-3"> <span class="text-sm text-gray-500">28 Dec, 12:12</span> </div> </td> </tr> <tr> <td class="size-px whitespace-nowrap"> <div class="px-6 py-3"> <div class="flex items-center gap-x-3"> <img class="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" /> <div class="grow"> <span class="block text-sm font-semibold text-gray-800 dark:text-gray-200">David Harrison</span> <span class="block text-sm text-gray-500">david@site.com</span> </div> </div> </div> </td> <td class="size-px whitespace-nowrap"> <div class="px-6 py-3"> <span class="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"> <svg class="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg> Warning </span> </div> </td> <td class="size-px whitespace-nowrap"> <div class="px-6 py-3"> <div class="flex items-center gap-x-3"> <span class="text-xs text-gray-500">3/5</span> <div class="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"> <div class="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap dark:bg-gray-200" style="width: 78%"></div> </div> </div> </div> </td> <td class="size-px whitespace-nowrap"> <div class="px-6 py-3"> <span class="text-sm text-gray-500">20 Dec, 09:27</span> </div> </td> </tr> <tr> <td class="size-px whitespace-nowrap"> <div class="px-6 py-3"> <div class="flex items-center gap-x-3"> <span class="inline-flex items-center justify-center size-[38px] rounded-full bg-gray-300 dark:bg-gray-700"> <span class="font-medium text-gray-800 leading-none dark:text-gray-200">A</span> </span> <div class="grow"> <span class="block text-sm font-semibold text-gray-800 dark:text-gray-200">Anne Richard</span> <span class="block text-sm text-gray-500">anne@site.com</span> </div> </div> </div> </td> <td class="size-px whitespace-nowrap"> <div class="px-6 py-3"> <span class="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"> <svg class="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/> </svg> Active </span> </div> </td> <td class="size-px whitespace-nowrap"> <div class="px-6 py-3"> <div class="flex items-center gap-x-3"> <span class="text-xs text-gray-500">5/5</span> <div class="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"> <div class="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap dark:bg-gray-200" style="width: 100%"></div> </div> </div> </div> </td> <td class="size-px whitespace-nowrap"> <div class="px-6 py-3"> <span class="text-sm text-gray-500">18 Dec, 15:20</span> </div> </td> </tr> <tr> <td class="size-px whitespace-nowrap"> <div class="px-6 py-3"> <div class="flex items-center gap-x-3"> <img class="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80" alt="Image Description" /> <div class="grow"> <span class="block text-sm font-semibold text-gray-800 dark:text-gray-200">Samia Kartoon</span> <span class="block text-sm text-gray-500">samia@site.com</span> </div> </div> </div> </td> <td class="size-px whitespace-nowrap"> <div class="px-6 py-3"> <span class="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"> <svg class="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/> </svg> Active </span> </div> </td> <td class="size-px whitespace-nowrap"> <div class="px-6 py-3"> <div class="flex items-center gap-x-3"> <span class="text-xs text-gray-500">0/5</span> <div class="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"> <div class="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap dark:bg-gray-200" style="width: 1%"></div> </div> </div> </div> </td> <td class="size-px whitespace-nowrap"> <div class="px-6 py-3"> <span class="text-sm text-gray-500">18 Dec, 15:20</span> </div> </td> </tr> </tbody> </table> </div> </div> </div>',
                text: "Hi, How are you?"
            }
        }
        setTimeout(() => {
            setBotResponse(response.data.text)
            setTable(response.data.table)
        }, 2000)
    }
    useEffect(() => {
        scroll()
    }, [botRespoonse])
    useEffect(() => {
        scroll()
    }, [table])
    useEffect(() => {
        fetchResponse(prompt)
    }, [])
    return (
        <li className="botli">
            <svg className="botsvg" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="38" rx="6" fill="#2563EB" />
                <path d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25" stroke="white" strokeWidth="1.5" />
                <path d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25" stroke="white" strokeWidth="1.5" />
                <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white" />
            </svg>

            <div className="grow max-w-[90%] md:max-w-2xl w-full space-y-3">
                {/* <!-- Card --> */}
                <div className="space-y-3">
                    <p className="text-sm text-gray-800">
                        {botRespoonse}
                    </p>
                </div>
                {/* <!-- End Card --> */}
                <div dangerouslySetInnerHTML={
                    { __html: table }
                } id='table'></div>
                {/* {table && <TableComponent tableData={table} />} */}
            </div>
        </li>
    )
}
