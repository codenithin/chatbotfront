import React from 'react'
import Sidebar from '../components/Sidebar'

export default function Dashboard() {
    return (
        <div className='w-screen h-screen'>
            <Sidebar selected={'dashboard'} />
            <div>
                <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
                    <header>
                        <p className="mb-2 text-sm font-semibold text-blue-600">FY 2023-2024</p>
                        <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl ">Procurement Dashboard</h1>
                        <p className="mt-2 text-lg text-gray-800 ">Strategic Business Unit - Europe</p>
                        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-8 mx-auto">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                <div className="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl ">
                                    <div className="inline-flex justify-center items-center">
                                        <span className="size-2 inline-block bg-gray-500 rounded-full me-2"></span>
                                        <span className="text-xs font-semibold uppercase text-gray-600 ">In-Flight Procurement Projects</span>
                                    </div>

                                    <div className="text-center">
                                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 ">
                                            24
                                        </h3>
                                    </div>



                                    <dl className="flex justify-center items-center divide-x divide-gray-200 ">
                                        <dt className="pe-3">
                                            <span className="text-green-600">
                                                <svg className="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                                </svg>
                                                <span className="inline-block text-sm">
                                                    14%
                                                </span>
                                            </span>
                                            <span className="block text-sm text-gray-500">change</span>
                                        </dt>
                                        <dd className="text-start ps-3">
                                            <span className="text-sm font-semibold text-gray-800 ">21</span>
                                            <span className="block text-sm text-gray-500">last week</span>
                                        </dd>
                                    </dl>
                                </div>

                                <div className="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl ">
                                    <div className="inline-flex justify-center items-center">
                                        <span className="size-2 inline-block bg-gray-500 rounded-full me-2"></span>
                                        <span className="text-xs font-semibold uppercase text-gray-600 ">Vendors</span>
                                    </div>

                                    <div className="text-center">
                                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 ">
                                            47
                                        </h3>
                                    </div>



                                    <dl className="flex justify-center items-center divide-x divide-gray-200 ">
                                        <dt className="pe-3">
                                            <span className="text-green-600">
                                                <svg className="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                                </svg>
                                                <span className="inline-block text-sm">
                                                    5%
                                                </span>
                                            </span>
                                            <span className="block text-sm text-gray-500">change</span>
                                        </dt>
                                        <dd className="text-start ps-3">
                                            <span className="text-sm font-semibold text-gray-800 ">45</span>
                                            <span className="block text-sm text-gray-500">last week</span>
                                        </dd>
                                    </dl>
                                </div>

                                <div className="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl ">
                                    <div className="inline-flex justify-center items-center">
                                        <span className="size-2 inline-block bg-gray-500 rounded-full me-2"></span>
                                        <span className="text-xs font-semibold uppercase text-gray-600 ">Indirect Spend</span>
                                    </div>

                                    <div className="text-center">
                                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 ">
                                            €15M
                                        </h3>
                                    </div>



                                    <dl className="flex justify-center items-center divide-x divide-gray-200 ">
                                        <dt className="pe-3">
                                            <span className="text-red-600">
                                                <svg className="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                                </svg>
                                                <span className="inline-block text-sm">
                                                    5.6%
                                                </span>
                                            </span>
                                            <span className="block text-sm text-gray-500">change</span>
                                        </dt>
                                        <dd className="text-start ps-3">
                                            <span className="text-sm font-semibold text-gray-800 ">€16M</span>
                                            <span className="block text-sm text-gray-500">last week</span>
                                        </dd>
                                    </dl>
                                </div>

                                <div className="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl ">
                                    <div className="inline-flex justify-center items-center">
                                        <span className="size-2 inline-block bg-gray-500 rounded-full me-2"></span>
                                        <span className="text-xs font-semibold uppercase text-gray-600 ">Internal Savings</span>
                                    </div>

                                    <div className="text-center">
                                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 ">
                                            €0.4M
                                        </h3>
                                    </div>



                                    <dl className="flex justify-center items-center divide-x divide-gray-200 ">
                                        <dt className="pe-3">
                                            <span className="text-green-600">
                                                <svg className="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                                </svg>
                                                <span className="inline-block text-sm">
                                                    1.7%
                                                </span>
                                            </span>
                                            <span className="block text-sm text-gray-500">change</span>
                                        </dt>
                                        <dd className="text-start ps-3">
                                            <span className="text-sm font-semibold text-gray-800 ">€0.4M</span>
                                            <span className="block text-sm text-gray-500">last week</span>
                                        </dd>
                                    </dl>
                                </div>

                                <div className="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl ">
                                    <div className="inline-flex justify-center items-center">
                                        <span className="size-2 inline-block bg-gray-500 rounded-full me-2"></span>
                                        <span className="text-xs font-semibold uppercase text-gray-600 ">Targeted Savings</span>
                                    </div>

                                    <div className="text-center">
                                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 ">
                                            €3M
                                        </h3>
                                    </div>



                                    <dl className="flex justify-center items-center divide-x divide-gray-200 ">
                                        <dt className="pe-3">
                                            <span className="text-green-600">
                                                <svg className="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                                </svg>
                                                <span className="inline-block text-sm">
                                                    1.7%
                                                </span>
                                            </span>
                                            <span className="block text-sm text-gray-500">change</span>
                                        </dt>
                                        <dd className="text-start ps-3">
                                            <span className="text-sm font-semibold text-gray-800 ">€2.9M</span>
                                            <span className="block text-sm text-gray-500">last week</span>
                                        </dd>
                                    </dl>
                                </div>

                                <div className="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl ">
                                    <div className="inline-flex justify-center items-center">
                                        <span className="size-2 inline-block bg-gray-500 rounded-full me-2"></span>
                                        <span className="text-xs font-semibold uppercase text-gray-600 ">External Savings</span>
                                    </div>

                                    <div className="text-center">
                                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 ">
                                            €2.2M
                                        </h3>
                                    </div>



                                    <dl className="flex justify-center items-center divide-x divide-gray-200 ">
                                        <dt className="pe-3">
                                            <span className="text-green-600">
                                                <svg className="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                                </svg>
                                                <span className="inline-block text-sm">
                                                    1.7%
                                                </span>
                                            </span>
                                            <span className="block text-sm text-gray-500">change</span>
                                        </dt>
                                        <dd className="text-start ps-3">
                                            <span className="text-sm font-semibold text-gray-800 ">€2.1M</span>
                                            <span className="block text-sm text-gray-500">last week</span>
                                        </dd>
                                    </dl>
                                </div>

                            </div>


                            <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                                <a className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none " href="/">
                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                    Back
                                </a>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        </div>

    )
}
