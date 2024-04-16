import React from 'react'

export default function Compare() {
  return (
    <div class="relative">
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8  mx-auto">

      <div class="hidden lg:block top-0 start-0 py-2 bg-white/60 backdrop-blur-md dark:bg-slate-900/60">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-2">
            <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
              Vendors
            </span>
          </div>

          <div class="col-span-1">
            <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
              Vendor A
            </span>
            <p class="mt-2 text-sm text-gray-500">
              SAAS Vendor
            </p>
          </div>

          <div class="col-span-1">
            <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
              Vendor B
            </span>
            <p class="mt-2 text-sm text-gray-500">
              SAAS Vendor
            </p>
          </div>

          <div class="col-span-1">
            <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
              Vendor C
            </span>
            <p class="mt-2 text-sm text-gray-500">
              SAAS + On Prem
            </p>
          </div>

          <div class="col-span-1">
            <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
              Vendor D
            </span>
            <p class="mt-2 text-sm text-gray-500">
              SAAS + On Prem
            </p>
          </div>
        </div>
      </div>

      <div class="space-y-4 lg:space-y-0">
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <li class="lg:col-span-2 lg:py-3">
            <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Pricing
            </span>
          </li>

          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>

          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>

          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>

          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
        </ul>

        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
              Number of seats
            </span>
          </li>
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <span class="text-sm text-gray-800 dark:text-gray-200">
                1000
              </span>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <span class="text-sm text-gray-800 dark:text-gray-200">
                Up to 500
              </span>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <span class="text-sm text-gray-800 dark:text-gray-200">
                200
              </span>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <span class="text-sm text-gray-800 dark:text-gray-200">
                Unlimited
              </span>
            </div>
          </li>
        </ul>

        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
              Cloud Storage
            </span>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <span class="text-sm text-gray-800 dark:text-gray-200">
                10 TB
              </span>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <span class="text-sm text-gray-800 dark:text-gray-200">
                1 TB
              </span>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <span class="text-sm text-gray-800 dark:text-gray-200">
                15 TB
              </span>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <span class="text-sm text-gray-800 dark:text-gray-200">
                Unlimited
              </span>
            </div>
          </li>
        </ul>

        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
              License Cost
            </span>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <span class="text-sm text-gray-800 dark:text-gray-200">
                500$ per user
              </span>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <span class="text-sm text-gray-800 dark:text-gray-200">
                500$ per user
              </span>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <span class="text-sm text-gray-800 dark:text-gray-200">
                500$ per user
              </span>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <span class="text-sm text-gray-800 dark:text-gray-200">
                500$ per user
              </span>
            </div>
          </li>
        </ul>

        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
              Average Consulting Rate per Hour
            </span>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <span class="text-sm text-gray-800 dark:text-gray-200">
                52€
              </span>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <span class="text-sm text-gray-800 dark:text-gray-200">
                56€
              </span>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <span class="text-sm text-gray-800 dark:text-gray-200">
                42€
              </span>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <span class="text-sm text-gray-800 dark:text-gray-200">
                47€
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div class="mt-6 space-y-4 lg:space-y-0">
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <li class="lg:col-span-2 lg:py-3">
            <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Functional Requirements
            </span>
          </li>

          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>

          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>

          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>

          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
        </ul>

        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
              Integration with HRM Systems
            </span>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
        </ul>

        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
              System Scalability
            </span>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
        </ul>
      </div>

      <div class="mt-6 space-y-4 lg:space-y-0">
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <li class="lg:col-span-2 lg:py-3">
            <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Non Functional Requirements
            </span>
          </li>

          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>

          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>

          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>

          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
        </ul>

        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
              Application growth
            </span>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
        </ul>

        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
              Average tokens consumed
            </span>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
        </ul>

        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
              Integration APIs
            </span>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
        </ul>

        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
              EHS Compliance
            </span>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
        </ul>

        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
              Transaction volume
            </span>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
        </ul>

        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
              Maximum Archival Data
            </span>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
        </ul>

        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
              Large Language Models
            </span>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
        </ul>

        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
              High Availability
            </span>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
        </ul>
      </div>

      <div class="mt-6 space-y-4 lg:space-y-0">
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <li class="lg:col-span-2 lg:py-3">
            <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Pricing Parameters
            </span>
          </li>

          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>

          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>

          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>

          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
        </ul>

        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
              Year on Year Savings
            </span>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
        </ul>

        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
              Payment Terms
            </span>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
        </ul>

        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
              Adherence to Payment Terms
            </span>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
            </div>
          </li>

          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </li>
        </ul>
      </div>

      <div class="hidden lg:block mt-6">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-2">
          </div>

          <div class="col-span-1">
            <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800" href="#">
              Open Proposal
            </a>
          </div>

          <div class="col-span-1">
            <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-violet-600 text-white hover:bg-violet-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
              Open Proposal
            </a>
          </div>

          <div class="col-span-1">
            <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800" href="#">
              Open Proposal
            </a>
          </div>

          <div class="col-span-1">
            <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800" href="#">
              Open Proposal
            </a>
          </div>
        </div>
      </div>

      <div class="mt-8 md:mt-12 flex justify-center items-center gap-x-3">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Finalize Contracting with Chosen Vendor
        </p>

        <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-xl font-medium rounded-lg border bg-violet-300 border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800">
          Initiate Contract
        </button>
      </div>
    </div>
  </div>
  )
}
