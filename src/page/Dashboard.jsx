import React from 'react'
import Sidebar from '../components/Sidebar'

export default function Dashboard() {
    return (
        <div className='w-screen h-screen'>
            <Sidebar selected={'dashboard'} />
            <div>
                <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
                    <header>
                        <p class="mb-2 text-sm font-semibold text-blue-600">FY 2023-2024</p>
                        <h1 class="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">Procurement Dashboard</h1>
                        <p class="mt-2 text-lg text-gray-800 dark:text-gray-400">Strategic Business Unit - Europe</p>
                        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-8 mx-auto">
                            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                <div class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                                    <div class="inline-flex justify-center items-center">
                                        <span class="size-2 inline-block bg-gray-500 rounded-full me-2"></span>
                                        <span class="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">In-Flight Procurement Projects</span>
                                    </div>

                                    <div class="text-center">
                                        <h3 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200">
                                            24
                                        </h3>
                                    </div>



                                    <dl class="flex justify-center items-center divide-x divide-gray-200 dark:divide-gray-700">
                                        <dt class="pe-3">
                                            <span class="text-green-600">
                                                <svg class="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                                </svg>
                                                <span class="inline-block text-sm">
                                                    14%
                                                </span>
                                            </span>
                                            <span class="block text-sm text-gray-500">change</span>
                                        </dt>
                                        <dd class="text-start ps-3">
                                            <span class="text-sm font-semibold text-gray-800 dark:text-gray-200">21</span>
                                            <span class="block text-sm text-gray-500">last week</span>
                                        </dd>
                                    </dl>
                                </div>

                                <div class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                                    <div class="inline-flex justify-center items-center">
                                        <span class="size-2 inline-block bg-gray-500 rounded-full me-2"></span>
                                        <span class="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">Vendors</span>
                                    </div>

                                    <div class="text-center">
                                        <h3 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200">
                                            47
                                        </h3>
                                    </div>



                                    <dl class="flex justify-center items-center divide-x divide-gray-200 dark:divide-gray-700">
                                        <dt class="pe-3">
                                            <span class="text-green-600">
                                                <svg class="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                                </svg>
                                                <span class="inline-block text-sm">
                                                    5%
                                                </span>
                                            </span>
                                            <span class="block text-sm text-gray-500">change</span>
                                        </dt>
                                        <dd class="text-start ps-3">
                                            <span class="text-sm font-semibold text-gray-800 dark:text-gray-200">45</span>
                                            <span class="block text-sm text-gray-500">last week</span>
                                        </dd>
                                    </dl>
                                </div>

                                <div class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                                    <div class="inline-flex justify-center items-center">
                                        <span class="size-2 inline-block bg-gray-500 rounded-full me-2"></span>
                                        <span class="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">Indirect Spend</span>
                                    </div>

                                    <div class="text-center">
                                        <h3 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200">
                                            €15M
                                        </h3>
                                    </div>



                                    <dl class="flex justify-center items-center divide-x divide-gray-200 dark:divide-gray-700">
                                        <dt class="pe-3">
                                            <span class="text-red-600">
                                                <svg class="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                                </svg>
                                                <span class="inline-block text-sm">
                                                    5.6%
                                                </span>
                                            </span>
                                            <span class="block text-sm text-gray-500">change</span>
                                        </dt>
                                        <dd class="text-start ps-3">
                                            <span class="text-sm font-semibold text-gray-800 dark:text-gray-200">€16M</span>
                                            <span class="block text-sm text-gray-500">last week</span>
                                        </dd>
                                    </dl>
                                </div>

                                <div class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                                    <div class="inline-flex justify-center items-center">
                                        <span class="size-2 inline-block bg-gray-500 rounded-full me-2"></span>
                                        <span class="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">Internal Savings</span>
                                    </div>

                                    <div class="text-center">
                                        <h3 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200">
                                            €0.4M
                                        </h3>
                                    </div>



                                    <dl class="flex justify-center items-center divide-x divide-gray-200 dark:divide-gray-700">
                                        <dt class="pe-3">
                                            <span class="text-green-600">
                                                <svg class="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                                </svg>
                                                <span class="inline-block text-sm">
                                                    1.7%
                                                </span>
                                            </span>
                                            <span class="block text-sm text-gray-500">change</span>
                                        </dt>
                                        <dd class="text-start ps-3">
                                            <span class="text-sm font-semibold text-gray-800 dark:text-gray-200">€0.4M</span>
                                            <span class="block text-sm text-gray-500">last week</span>
                                        </dd>
                                    </dl>
                                </div>

                                <div class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                                    <div class="inline-flex justify-center items-center">
                                        <span class="size-2 inline-block bg-gray-500 rounded-full me-2"></span>
                                        <span class="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">Targeted Savings</span>
                                    </div>

                                    <div class="text-center">
                                        <h3 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200">
                                            €3M
                                        </h3>
                                    </div>



                                    <dl class="flex justify-center items-center divide-x divide-gray-200 dark:divide-gray-700">
                                        <dt class="pe-3">
                                            <span class="text-green-600">
                                                <svg class="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                                </svg>
                                                <span class="inline-block text-sm">
                                                    1.7%
                                                </span>
                                            </span>
                                            <span class="block text-sm text-gray-500">change</span>
                                        </dt>
                                        <dd class="text-start ps-3">
                                            <span class="text-sm font-semibold text-gray-800 dark:text-gray-200">€2.9M</span>
                                            <span class="block text-sm text-gray-500">last week</span>
                                        </dd>
                                    </dl>
                                </div>

                                <div class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                                    <div class="inline-flex justify-center items-center">
                                        <span class="size-2 inline-block bg-gray-500 rounded-full me-2"></span>
                                        <span class="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">External Savings</span>
                                    </div>

                                    <div class="text-center">
                                        <h3 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200">
                                            €2.2M
                                        </h3>
                                    </div>



                                    <dl class="flex justify-center items-center divide-x divide-gray-200 dark:divide-gray-700">
                                        <dt class="pe-3">
                                            <span class="text-green-600">
                                                <svg class="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                                </svg>
                                                <span class="inline-block text-sm">
                                                    1.7%
                                                </span>
                                            </span>
                                            <span class="block text-sm text-gray-500">change</span>
                                        </dt>
                                        <dd class="text-start ps-3">
                                            <span class="text-sm font-semibold text-gray-800 dark:text-gray-200">€2.1M</span>
                                            <span class="block text-sm text-gray-500">last week</span>
                                        </dd>
                                    </dl>
                                </div>

                            </div>


                            <div class="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                                <a class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400" href="/">
                                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
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
