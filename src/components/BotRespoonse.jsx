import React, { useEffect, useRef, useState } from 'react'
import TableComponent from './table/TableComponent'
import ButtonGroup from './ButtonGroup'
import Typewriter from './Typewriter'
import Form from './form/Form'
import BASE_URL from '../config'
import LargeText from './largeText/LargeText'
import Chart from './charts/Chart'
import Actions from './actions/Actions'
import SourcingOptions from './options/SourcingOptions'
import Compare from './compare/Compare'
export default function BotRespoonse({ rfpQuestion, setRFPQuestions, prompt, scroll, responseRef, send, setYesMessage, scrollToBottom, yesMessage }) {

    const [botRespoonse, setBotResponse] = useState("")
    const [error, setError] = useState(false)
    const [ready, setReady] = useState(false)
    const [data, setData] = useState(null)
    const [showBottomText, setShowBottomText] = useState(false)
    const [bottomText, setBottomText] = useState("")
    const [resopnseType, setResponseType] = useState('text')
    const [to, setTo] = useState('to')
    const fetchResponse = async (prompt) => {
        const res = await fetch(BASE_URL + '/send', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt,
                yesMessage
            })
        })
        const response = await res.json()
        if (response.error) {
            setBotResponse(response.error)
            setError(true)
            return
        }
        setBotResponse(response.text)
        setData(response.data)
        setResponseType(response.data.type)
        setTo(response.data.to)
        setYesMessage(response.data.yes)
        setBottomText(response.data.bottomText)
        if(response.data.type == "LARGETEXT") {
            setTimeout(() => {
                setShowBottomText(true)
            }, response.data.largeText.length * 5)
        }else {
            setShowBottomText(true)
        }

    }
    useEffect(() => {
        scroll()
    }, [botRespoonse])
    useEffect(() => {
        scroll()
    }, [data])
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
                        {/* <div dangerouslySetInnerHTML={
                            { __html: "<div>anas</div>" }
                        } id='table'></div> */}

                        <div>
                            {resopnseType == 'TABLE' && <TableComponent tableData={data.table} />}
                            {resopnseType == 'FORM' && <Form title={data.title} questions={data.questions} />}
                            {resopnseType == 'LARGETEXT' && <LargeText setShowBottomText={setShowBottomText} text={data.largeText} scroll={scrollToBottom} />}
                            {resopnseType == 'CHART' && <Chart chartType={data.chartType} series={data.series} options={data.options} height={data.height} width={data.width} />}
                            {resopnseType == 'ACTIONS' && <Actions actions={data.actions} />}
                            {resopnseType == 'OPTIONS' && <SourcingOptions options={data} />}
                            {resopnseType == 'COMPARE' && <Compare title={data.title} header={data.header} sections={data.sections} />}
                        </div>
                        {(bottomText && showBottomText) && (
                            <div className="space-y-3">
                                <p className="text-gray-800">
                                    <Typewriter text={bottomText} delay={30} />
                                </p>
                            </div>
                        )}
                    </div>
                )}
                {/* <Test /> */}
                <ButtonGroup />
            </div>
        </li>
    )
}

