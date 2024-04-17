import React, { useEffect, useRef, useState } from 'react'
import TableComponent from './TableComponent'
import ButtonGroup from './ButtonGroup'
import Test from './Test'
import responses from './responses'
import Typewriter from './Typewriter'
import SingleBarChart from './charts/SingleBarChart'
import DoubleBarChart from './charts/DoubleBarChart'
import SingleLineChart from './charts/SingleLineChart'
import DoubleLineChart from './charts/DoubleLineChart'
import Form from './Form'
import Link from './Link'
import FourLineChart from './charts/FourLineChart'
import List from './List'
import VendorResponse from './VendorResponse'
import VendorThankYou from './VendorThankYou'
import Strategy from './Strategy'
import Compare from './Compare'
import SourcingOptions from './SourcingOptions'
export default function BotRespoonse({ prompt, scroll, responseRef, send, setYesMessage, scrollToBottom }) {
    const BASE_URL = "https://chatbot-backend-1e93.onrender.com"
    // const BASE_URL = ""
    const [botRespoonse, setBotResponse] = useState("")
    const [error, setError] = useState(false)
    const [ready, setReady] = useState(false)
    const [renderList, setRenderList] = useState(false)
    const [table, setTable] = useState(null)
    const [resopnseType, setResponseType] = useState('text')
    const [to, setTo] = useState('to')
    const [list, setList] = useState()
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
            setError(true)
            return
        }
        setBotResponse(response.data.text)
        setTable(response.data.table)
        setResponseType(response.data.type)
        setTo(response.data.to)
        setList(response.data.list)
        setYesMessage(response.data.yesMessage)

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
        <li ref={responseRef} className="botli">
            <svg className="botsvg" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="38" rx="6" fill="#2563EB" />
                <path d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25" stroke="white" strokeWidth="1.5" />
                <path d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25" stroke="white" strokeWidth="1.5" />
                <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white" />
            </svg>

            <div className="grow max-w-[90%] w-full space-y-3 mt-2">
                {/* <!-- Card --> */}
                <div className="space-y-3">
                    <p className="text-gray-800">
                        <Typewriter setReady={setReady} text={botRespoonse} delay={30} scroll={scroll} />
                    </p>
                </div>
                {/* <!-- End Card --> */}
                {ready && (
                    <div>
                        <div dangerouslySetInnerHTML={
                            { __html: table }
                        } id='table'>

                        </div>
                        {resopnseType == 'single-bar-chart' && <SingleBarChart />}
                        {resopnseType == 'double-bar-chart' && <DoubleBarChart />}
                        {resopnseType == 'single-line-chart' && <SingleLineChart />}
                        {resopnseType == 'double-line-chart' && <DoubleLineChart />}
                        {resopnseType == '4-line-chart' && <FourLineChart />}
                        {resopnseType == 'form' && <Form />}
                        {resopnseType == 'link' && <Link send={send} to={to} />}
                        {resopnseType == 'vendor-proposal' && <VendorResponse setReady={setRenderList} scroll={scrollToBottom} />}
                        {resopnseType == 'vendor-thankyou' && <VendorThankYou setReady={setRenderList} scroll={scrollToBottom} />}
                        {resopnseType == 'strategy' && <Strategy setReady={setRenderList} scroll={scrollToBottom} />}
                        {resopnseType == 'compare' && <Compare />}
                        {resopnseType == 'sourcing-options' && <SourcingOptions />}
                        {(renderList && list) && <List list={list} />}
                    </div>
                )}
                <Test />


                {table && <ButtonGroup />}
                {/* {table && <TableComponent tableData={table} />} */}
            </div>
        </li>
    )
}
