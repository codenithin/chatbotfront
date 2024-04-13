import React, { useEffect, useRef, useState } from 'react'
import TableComponent from './TableComponent'
import ButtonGroup from './ButtonGroup'

export default function BotRespoonse({ prompt, scroll }) {
    const BASE_URL = "http://localhost:3000"
    const [botRespoonse, setBotResponse] = useState("Thinking...")
    const [table, setTable] = useState(null)
    const fetchResponse = async (prompt) => {
        const res = await fetch(BASE_URL + '/send', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt
            })
        })
        const response = await res.json()
        if (response.error) {
            setBotResponse(response.error)
            return
        }
        setBotResponse(response.data.text)
        setTable(response.data.table)
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
    const codeResponse = '<div><div class="mt-3 flex-none min-w-full bg-gray-800 font-mono text-sm p-5 rounded-lg dark:bg-slate-800"><span class="text-red-500">&lt;</span><span class="text-red-500">table <span class="text-gray-300">class="<span class="text-sky-400">min-w-full divide-y divide-gray-200 dark:divide-gray-700</span>"</span><span class="text-red-500">&gt;</span><span class="block"></span> <span class="ms-5 text-red-500">&lt;</span><span class="text-red-500">thead <span class="text-gray-300">class="<span class="text-sky-400">bg-gray-50 dark:bg-slate-800</span>"</span><span class="text-red-500">&gt;</span><span class="block"></span><span class="text-red-500"> <span class="ms-10 text-slate-500">...</span></span></span></span></div> <div> <div class="sm:flex sm:justify-between"> <div> <div class="inline-flex border border-gray-200 rounded-full p-0.5 dark:border-gray-700"> <button type="button" class="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-blue-900 dark:hover:text-blue-200"> <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" /></svg> </button> <button type="button" class="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-blue-900 dark:hover:text-blue-200"> <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 14V2" /><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" /></svg> </button> </div> <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700"> <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 14V2" /><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" /></svg> Copy </button> <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700"> <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg> Share </button> </div> <div class="mt-1 sm:mt-0"> <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700"> <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /></svg> New answer </button> </div> </div> </div></div>    '
    const imagesResponse = '<div class="grid grid-cols-2 gap-1 rounded-lg overflow-hidden">                    <div class="w-[20.5rem] h-[11rem] overflow-clip mb-1">                        <img class="w-full object-contain" src="https://images.unsplash.com/photo-1677644334825-0eb411012ac0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3343&q=80" alt="Deep Learning" />                    </div>                    <div class="w-[20.5rem] h-[11rem] overflow-clip">                        <img class="w-full object-contain rounded-tr-lg"  src="https://png.pngtree.com/background/20230617/original/pngtree-vibrant-abstract-artwork-brought-to-3d-life-picture-image_3698779.jpg" alt="Deep Learning" />                    </div>                    <div class="w-[20.5rem] h-[11rem] overflow-clip">                        <img class="w-full object-contain" src="https://images.unsplash.com/photo-1680193895115-b51b4ed5392f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" alt="Deep Learning" />                    </div>                    <div class="w-[20.5rem] h-[11rem] overflow-clip">                        <img class="w-full object-contain rounded-br-lg" src="https://images.unsplash.com/photo-1680587590161-3a1dd77a7609?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Deep Learning" />                    </div>                </div>'
    const quizResponse = '<div><button type="button" class="mb-2.5 me-1.5 py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-lg border border-blue-600 bg-white text-blue-600 align-middle hover:bg-blue-50 text-sm dark:bg-slate-900 dark:text-blue-500 dark:border-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400">'
    const linkResponse = '<div class="space-y-3"><p class="text-sm text-gray-800 dark:text-white">Preline UI is an open-source set of prebuilt UI components based on the utility-first Tailwind CSS framework.</p><div class="space-y-1.5"><p class="text-sm text-gray-800 dark:text-white">Here\'re some links to get started</p><ul><li><a class="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500 dark:hover:text-blue-400" href="../docs/index.html">Installation Guide</a></li><li><a class="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500 dark:hover:text-blue-400" href="../docs/frameworks.html">Framework Guides</a></li></ul></div></div>'
    const listResponse = '<div class="space-y-3"><p class="text-sm text-gray-800 dark:text-white">Preline UI Figma is the largest free design system for Figma, crafted with Tailwind CSS styles and Preline UI components with extra top - notch additions.</p > <div class="space-y-1.5"><p class="text-sm text-gray-800 dark:text-white">With the features like:</p><ul class="list-disc list-outside space-y-1.5 ps-3.5"><li class="text-sm text-gray-800 dark:text-white">12-column Grid System</li><li class="text-sm text-gray-800 dark:text-white">Easily find UI elements</li><li class="text-sm text-gray-800 dark:text-white">Variants and Properties</li><li class="text-sm text-gray-800 dark:text-white">Tailwind CSS Color styles</li><li class="text-sm text-gray-800 dark:text-white">Auto layout and constraints</li></ul></div></div>'
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

                

                {table && <ButtonGroup />}
                {/* {table && <TableComponent tableData={table} />} */}
            </div>
        </li>
    )
}
