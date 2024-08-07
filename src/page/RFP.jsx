import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'
import BASE_URL from '../config';
import { FormPortal } from '../components/portal/FormPortal';


export default function RFP() {

    const formRef = useRef(null);
    const [rfpQuestions, setRFPQuestions] = useState([]);
    const [title, setTitle] = useState("");
    async function fetchRFP() {
        const res = await fetch(BASE_URL + '/send', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt: "generate RFP"
            })
        })
        const response = await res.json()
        if (response.error) {
            return
        }
        setTitle(response.data.title)
        setRFPQuestions(response.data.questions)
    }
    function scroll() {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

    }
    useEffect(() => {
        fetchRFP()
    }, [])
    useEffect(() => {
        scroll()
    }, [title])

    return (
        <div className='w-screem h-screen overflow-y-scroll'>

            <div className='w-full flex justify-center items-center mt-16'>

                <div className="w-[50%] px-4 mx-auto select-none">
                    <div className="text-7xl font-bold font-sans pl-[25%] text-gray-800">
                        Welcome <br /> to <span className='text-9xl font-semibold bg-gradient-to-br from-[#ff4117] from-35% via-[#ff8010] to-[#ff4117] inline-block text-transparent bg-clip-text'>National Bank</span>
                    </div>
                </div>

                <div className='w-[50%] px-9 bg-gradient-to-tr from-[#ff8010] to-[#ff4117] text-white rounded-l-3xl py-8'>
                    <div className='text-3xl font-semibold'>Dear Prospective Vendors</div>
                    <div className='text-xl mt-1 text-wrap'>
                        We are a leading Company in Banking and Financial services and are seeking proposals for the development and implementation of a comprehensive Talent Acquisition System.
                        We are committed to enhancing our recruitment processes and optimizing our talent acquisition strategies to
                        support our growing business needs.
                    </div>
                </div>
            </div>

            <div className='w-full mt-10 flex justify-start items-center'>

                <div className='bg-gradient-to-tr to-[#ff8010] from-[#ff4117] w-[70%] py-8 rounded-r-3xl text-white'>
                    <div className='text-3xl font-semibold pl-[20%]'>About Us</div>
                    <div className='mt-1 text-xl pl-[20%] text-pretty pr-8'>
                        We are a global company operating in 15 Countries with a headcount of 18,000 people.
                        With a dedicated focus on Sustainability, Governance, Value for Life and sustainable development
                        we aim to simplify the lives of our customers.
                    </div>
                </div>

                <div className='w-[40%] flex justify-center items-center'>
                    <img className='w-96' src='./about-us.png' />
                </div>
            </div>

            <div className='w-full mt-10 flex flex-row-reverse justify-center items-center'>

                <div className='bg-gradient-to-bl from-[#ff8010] to-[#ff4117] w-[70%] py-8 rounded-l-3xl text-white'>
                    <div className='text-3xl font-semibold pl-[10%]'>Project Overview</div>
                    <div className='mt-1 text-xl pl-[10%] text-balance'>
                        The objective of this project is to procure and implement a state-of-the-art Talent Acquisition
                        System that will streamline our recruitment processes, improve candidate experiences, and enable us to
                        attract and retain top talent effectively. The system should integrate seamlessly with our existing HR
                        management systems and comply with all relevant data security and compliance standards.
                    </div>
                </div>

                <div className='w-[30%] flex justify-center items-center'>
                    <img className='w-72' src='./overview.png' />
                </div>
            </div>

            <div className='w-full mt-10 flex justify-center items-center'>

                <div className='bg-gradient-to-tr pr-32 from-[#ff8010] to-[#ff4117] w-[70%] py-8 rounded-r-3xl text-white'>
                    <div className='text-3xl font-semibold pl-[10%]'>Scope of Work</div>
                    <div className='mt-1 text-xl w-full font-bold pl-[10%]'>
                        The selected vendor will be responsible for the following
                    </div>
                    <ul className='w-full mt-1 text-lg pl-[10%] text-pretty space-y-2'>
                        <li>
                            <strong>1.</strong> Designing and developing a custom Talent Acquisition System tailored to our specific needs and requirements.
                        </li>
                        <li>
                            <strong>2.</strong> Providing comprehensive training and support to our internal teams during the implementation phase and post-implementation support.
                        </li>
                        <li>
                            <strong>3.</strong> Ensuring seamless integration with our existing HR management systems, including HRM, Employee Self Service systems.
                        </li>
                        <li>
                            <strong>4.</strong> Implementing robust data security measures to safeguard candidate information and ensure compliance with relevant regulations.
                        </li>
                        <li>
                            <strong>5.</strong> Delivering regular progress reports and updates throughout the project lifecycle.
                        </li>
                    </ul>
                </div>

                <div className='w-[30%] flex justify-center items-center'>
                    <img className='w-72' src='./scope.png' />
                </div>
            </div>


            <div className='w-full mt-10 flex flex-row-reverse justify-center items-center'>

                <div className='bg-gradient-to-bl from-[#ff8010] to-[#ff4117] w-[70%] py-8 rounded-l-3xl text-white'>
                    <div className='text-3xl font-semibold pl-[10%]'>Submission Guidelines</div>
                    <div className='mt-1 text-xl pl-[10%] text-balance'>
                        Interested vendors are invited to submit their proposals no later than Aug 2024. Proposals
                        should be comprehensive and include detailed information on the vendor's experience, proposed solution,
                        implementation timeline, pricing, and any additional services offered.
                    </div>
                </div>

                <div className='w-[30%] flex justify-center items-center'>
                    <img className='w-72' src='./guidelines.png' />
                </div>
            </div>

            <div ref={formRef}>
                <FormPortal questions={rfpQuestions} title={title} />
            </div>

        </div>
    )
}
