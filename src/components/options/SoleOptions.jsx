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
          ">

            <div className='flex flex-col items-center justify-start w-full h-full px-3 text-sm'>
                <div className='text-black relative flex flex-col justify-center items-center bg-white w-full py-5 rounded-xl'>
                    <div className='text-4xl my-5 font-bold'>Sole Sourcing Steps</div>
                    <ol className="font-semibold mx-10 text-lg">
                        <li className="">
                            1. Provide Notification to Vendors
                        </li>
                        <li className="">
                            2. Issue RFP and Terms
                        </li>
                        <li className="">
                            3. Best and Final Offer Round for Shortlisted Vendors
                        </li>
                        <li className="">
                            4. Negotiate Contract
                        </li>
                        <li className="relative flex-1">
                            5. Close Procurement Project
                        </li>
                    </ol>
                </div>
            </div>

        </div>
    )
}
