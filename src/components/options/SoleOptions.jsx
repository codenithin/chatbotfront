import React from 'react'

export default function SoleOptions() {
    return (
        <div id="application-sidebar" className="
         transition-all duration-300 transform 
         hidden start-[calc(100%-18rem)] bottom-0 z-[60]
          bg-white border-e border-gray-200 rounded-md
          overflow-y-auto w-full
          lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 
          [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 
          dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 
          dark:bg-gray-800 dark:border-gray-700">

            <div className='flex flex-col items-center justify-start w-full h-full px-3 text-sm'>
                <div className='text-black relative flex flex-col justify-center items-center bg-white w-full py-5 rounded-xl'>
                    <div className='text-4xl my-5 font-bold'>Sole Sourcing Steps</div>
                    <ol class="font-semibold mx-10 text-lg">
                        <li class="">
                            1. Provide Notification to Vendors
                        </li>
                        <li class="">
                            2. Issue RFP and Terms
                        </li>
                        <li class="">
                            3. Best and Final Offer Round for Shortlisted Vendors
                        </li>
                        <li class="">
                            4. Negotiate Contract
                        </li>
                        <li class="relative flex-1">
                            5. Close Procurement Project
                        </li>
                    </ol>
                </div>
            </div>

        </div>
    )
}
