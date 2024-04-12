import React, { useEffect, useRef, useState } from 'react'
import TableComponent from './TableComponent'

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
        if(response.error) {
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