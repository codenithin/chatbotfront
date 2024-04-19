import React from 'react'

export default function Compare() {
  return (
    <div className="relative">
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8  mx-auto">

      <div className="hidden lg:block top-0 start-0 py-2 bg-white/60 backdrop-blur-md ">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-2">
            <span className="font-semibold text-lg text-gray-800 ">
              Vendors
            </span>
          </div>

          <div className="col-span-1">
            <span className="font-semibold text-lg text-gray-800 ">
              Vendor A
            </span>
            <p className="mt-2 text-sm text-gray-500">
              SAAS Vendor
            </p>
          </div>

          <div className="col-span-1">
            <span className="font-semibold text-lg text-gray-800 ">
              Vendor B
            </span>
            <p className="mt-2 text-sm text-gray-500">
              SAAS Vendor
            </p>
          </div>

          <div className="col-span-1">
            <span className="font-semibold text-lg text-gray-800 ">
              Vendor C
            </span>
            <p className="mt-2 text-sm text-gray-500">
              SAAS + On Prem
            </p>
          </div>

          <div className="col-span-1">
            <span className="font-semibold text-lg text-gray-800 ">
              Vendor D
            </span>
            <p className="mt-2 text-sm text-gray-500">
              SAAS + On Prem
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4 lg:space-y-0">
        <ul className="grid lg:grid-cols-6 lg:gap-6">
          <li className="lg:col-span-2 lg:py-3">
            <span className="text-lg font-semibold text-gray-800 ">
              Pricing
            </span>
          </li>

          <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>

          <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>

          <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>

          <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
        </ul>

        <ul className="grid lg:grid-cols-6 lg:gap-6">
          <li className="lg:col-span-2 pb-1.5 lg:py-3">
            <span className="font-semibold lg:font-normal text-sm text-gray-800 ">
              Number of seats
            </span>
          </li>
          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Free
              </span>
              <span className="text-sm text-gray-800 ">
                1000
              </span>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Startup
              </span>
              <span className="text-sm text-gray-800 ">
                Up to 500
              </span>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Team
              </span>
              <span className="text-sm text-gray-800 ">
                200
              </span>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Enterprise
              </span>
              <span className="text-sm text-gray-800 ">
                Unlimited
              </span>
            </div>
          </li>
        </ul>

        <ul className="grid lg:grid-cols-6 lg:gap-6">
          <li className="lg:col-span-2 pb-1.5 lg:py-3">
            <span className="font-semibold lg:font-normal text-sm text-gray-800 ">
              Cloud Storage
            </span>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Free
              </span>
              <span className="text-sm text-gray-800 ">
                10 TB
              </span>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Startup
              </span>
              <span className="text-sm text-gray-800 ">
                1 TB
              </span>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Team
              </span>
              <span className="text-sm text-gray-800 ">
                15 TB
              </span>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Enterprise
              </span>
              <span className="text-sm text-gray-800 ">
                Unlimited
              </span>
            </div>
          </li>
        </ul>

        <ul className="grid lg:grid-cols-6 lg:gap-6">
          <li className="lg:col-span-2 pb-1.5 lg:py-3">
            <span className="font-semibold lg:font-normal text-sm text-gray-800 ">
              License Cost
            </span>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Free
              </span>
              <span className="text-sm text-gray-800 ">
                500$ per user
              </span>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Startup
              </span>
              <span className="text-sm text-gray-800 ">
                500$ per user
              </span>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Team
              </span>
              <span className="text-sm text-gray-800 ">
                500$ per user
              </span>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Enterprise
              </span>
              <span className="text-sm text-gray-800 ">
                500$ per user
              </span>
            </div>
          </li>
        </ul>

        <ul className="grid lg:grid-cols-6 lg:gap-6">
          <li className="lg:col-span-2 pb-1.5 lg:py-3">
            <span className="font-semibold lg:font-normal text-sm text-gray-800 ">
              Average Consulting Rate per Hour
            </span>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Free
              </span>
              <span className="text-sm text-gray-800 ">
                52€
              </span>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Startup
              </span>
              <span className="text-sm text-gray-800 ">
                56€
              </span>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Team
              </span>
              <span className="text-sm text-gray-800 ">
                42€
              </span>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Enterprise
              </span>
              <span className="text-sm text-gray-800 ">
                47€
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div className="mt-6 space-y-4 lg:space-y-0">
        <ul className="grid lg:grid-cols-6 lg:gap-6">
          <li className="lg:col-span-2 lg:py-3">
            <span className="text-lg font-semibold text-gray-800 ">
              Functional Requirements
            </span>
          </li>

          <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>

          <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>

          <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>

          <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
        </ul>

        <ul className="grid lg:grid-cols-6 lg:gap-6">
          <li className="lg:col-span-2 pb-1.5 lg:py-3">
            <span className="font-semibold lg:font-normal text-sm text-gray-800 ">
              Integration with HRM Systems
            </span>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Free
              </span>
              <svg className="flex-shrink-0 size-5 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Startup
              </span>
              <svg className="flex-shrink-0 size-5 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Team
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Enterprise
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
        </ul>

        <ul className="grid lg:grid-cols-6 lg:gap-6">
          <li className="lg:col-span-2 pb-1.5 lg:py-3">
            <span className="font-semibold lg:font-normal text-sm text-gray-800 ">
              System Scalability
            </span>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Free
              </span>
              <svg className="flex-shrink-0 size-5 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Startup
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Team
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Enterprise
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
        </ul>
      </div>

      <div className="mt-6 space-y-4 lg:space-y-0">
        <ul className="grid lg:grid-cols-6 lg:gap-6">
          <li className="lg:col-span-2 lg:py-3">
            <span className="text-lg font-semibold text-gray-800 ">
              Non Functional Requirements
            </span>
          </li>

          <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>

          <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>

          <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>

          <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
        </ul>

        <ul className="grid lg:grid-cols-6 lg:gap-6">
          <li className="lg:col-span-2 pb-1.5 lg:py-3">
            <span className="font-semibold lg:font-normal text-sm text-gray-800 ">
              Application growth
            </span>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Free
              </span>
              <svg className="flex-shrink-0 size-5 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Startup
              </span>
              <svg className="flex-shrink-0 size-5 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Team
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Enterprise
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
        </ul>

        <ul className="grid lg:grid-cols-6 lg:gap-6">
          <li className="lg:col-span-2 pb-1.5 lg:py-3">
            <span className="font-semibold lg:font-normal text-sm text-gray-800 ">
              Average tokens consumed
            </span>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Free
              </span>
              <svg className="flex-shrink-0 size-5 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Startup
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Team
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Enterprise
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
        </ul>

        <ul className="grid lg:grid-cols-6 lg:gap-6">
          <li className="lg:col-span-2 pb-1.5 lg:py-3">
            <span className="font-semibold lg:font-normal text-sm text-gray-800 ">
              Integration APIs
            </span>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Free
              </span>
              <svg className="flex-shrink-0 size-5 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Startup
              </span>
              <svg className="flex-shrink-0 size-5 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Team
              </span>
              <svg className="flex-shrink-0 size-5 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Enterprise
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
        </ul>

        <ul className="grid lg:grid-cols-6 lg:gap-6">
          <li className="lg:col-span-2 pb-1.5 lg:py-3">
            <span className="font-semibold lg:font-normal text-sm text-gray-800 ">
              EHS Compliance
            </span>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Free
              </span>
              <svg className="flex-shrink-0 size-5 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Startup
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Team
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Enterprise
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
        </ul>

        <ul className="grid lg:grid-cols-6 lg:gap-6">
          <li className="lg:col-span-2 pb-1.5 lg:py-3">
            <span className="font-semibold lg:font-normal text-sm text-gray-800 ">
              Transaction volume
            </span>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Free
              </span>
              <svg className="flex-shrink-0 size-5 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Startup
              </span>
              <svg className="flex-shrink-0 size-5 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Team
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Enterprise
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
        </ul>

        <ul className="grid lg:grid-cols-6 lg:gap-6">
          <li className="lg:col-span-2 pb-1.5 lg:py-3">
            <span className="font-semibold lg:font-normal text-sm text-gray-800 ">
              Maximum Archival Data
            </span>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Free
              </span>
              <svg className="flex-shrink-0 size-5 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Startup
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Team
              </span>
              <svg className="flex-shrink-0 size-5 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Enterprise
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
        </ul>

        <ul className="grid lg:grid-cols-6 lg:gap-6">
          <li className="lg:col-span-2 pb-1.5 lg:py-3">
            <span className="font-semibold lg:font-normal text-sm text-gray-800 ">
              Large Language Models
            </span>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Free
              </span>
              <svg className="flex-shrink-0 size-5 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Startup
              </span>
              <svg className="flex-shrink-0 size-5 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Team
              </span>
              <svg className="flex-shrink-0 size-5 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>
          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Enterprise
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
        </ul>

        <ul className="grid lg:grid-cols-6 lg:gap-6">
          <li className="lg:col-span-2 pb-1.5 lg:py-3">
            <span className="font-semibold lg:font-normal text-sm text-gray-800 ">
              High Availability
            </span>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Free
              </span>
              <svg className="flex-shrink-0 size-5 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Startup
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Team
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Enterprise
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
        </ul>
      </div>

      <div className="mt-6 space-y-4 lg:space-y-0">
        <ul className="grid lg:grid-cols-6 lg:gap-6">
          <li className="lg:col-span-2 lg:py-3">
            <span className="text-lg font-semibold text-gray-800 ">
              Pricing Parameters
            </span>
          </li>

          <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>

          <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>

          <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>

          <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
        </ul>

        <ul className="grid lg:grid-cols-6 lg:gap-6">
          <li className="lg:col-span-2 pb-1.5 lg:py-3">
            <span className="font-semibold lg:font-normal text-sm text-gray-800 ">
              Year on Year Savings
            </span>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Free
              </span>
              <svg className="flex-shrink-0 size-5 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Startup
              </span>
              <svg className="flex-shrink-0 size-5 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Team
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Enterprise
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
        </ul>

        <ul className="grid lg:grid-cols-6 lg:gap-6">
          <li className="lg:col-span-2 pb-1.5 lg:py-3">
            <span className="font-semibold lg:font-normal text-sm text-gray-800 ">
              Payment Terms
            </span>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Free
              </span>
              <svg className="flex-shrink-0 size-5 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Startup
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Team
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Enterprise
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
        </ul>

        <ul className="grid lg:grid-cols-6 lg:gap-6">
          <li className="lg:col-span-2 pb-1.5 lg:py-3">
            <span className="font-semibold lg:font-normal text-sm text-gray-800 ">
              Adherence to Payment Terms
            </span>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Free
              </span>
              <svg className="flex-shrink-0 size-5 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Startup
              </span>
              <svg className="flex-shrink-0 size-5 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Team
              </span>
              <svg className="flex-shrink-0 size-5 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span className="lg:hidden md:col-span-2 text-sm text-gray-800 ">
                Enterprise
              </span>
              <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
        </ul>
      </div>

      <div className="hidden lg:block mt-6">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-2">
          </div>

          <div className="col-span-1">
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none   " href="#">
              Open Proposal
            </a>
          </div>

          <div className="col-span-1">
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-violet-600 text-white hover:bg-violet-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
              Open Proposal
            </a>
          </div>

          <div className="col-span-1">
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none   " href="#">
              Open Proposal
            </a>
          </div>

          <div className="col-span-1">
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none   " href="#">
              Open Proposal
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-12 flex justify-center items-center gap-x-3">
        <p className="text-sm text-gray-500 ">
          Finalize Contracting with Chosen Vendor
        </p>

        <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-xl font-medium rounded-lg border bg-violet-300 border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none   ">
          Initiate Contract
        </button>
      </div>
    </div>
  </div>
  )
}
