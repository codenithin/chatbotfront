import React, { useState } from 'react'
import ButtonGroup from './ButtonGroup'
import Modal from 'react-modal'
import OptionModal from './OptionModal';
export default function SourcingOptions() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState("")
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className='mt-10'>
            <OptionModal
                isOpen={modalIsOpen}
                setIsOpen={setIsOpen}
                content={content}
            />
            <div class="grid md:grid-cols-2 gap-6 lg:gap-12">
                <div class="space-y-6 lg:space-y-10">
                    <div onClick={() => {
                        setContent('rfp')
                        setIsOpen(true)
                    }} class="flex border-2 py-3 px-5 rounded-lg bg-white hover:bg-gray-100 cursor-pointer h-28">
                        <svg class="flex-shrink-0 mt-2 size-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="10" x="3" y="11" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" x2="8" y1="16" y2="16" /><line x1="16" x2="16" y1="16" y2="16" /></svg>
                        <div class="ms-5 sm:ms-8">
                            <h3 class="text-base font-semibold text-gray-800 dark:text-neutral-200">
                                Request for Proposal
                            </h3>
                            <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                                Request competitive proposals and evaluate proposals to select the final supplier. Pricing Mandatory. Non Binding.
                            </p>
                        </div>
                    </div>

                    <div onClick={() => {
                        setContent('rfi')
                        setIsOpen(true)
                    }} class="flex border-2 py-3 px-5 rounded-lg bg-white hover:bg-gray-100 cursor-pointer h-28">
                        <svg class="flex-shrink-0 mt-2 size-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15" /><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg>
                        <div class="ms-5 sm:ms-8">
                            <h3 class="font-semibold text-gray-800 dark:text-neutral-200">
                                Request for Information
                            </h3>
                            <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                                Request the latest offerings by Vendors to match the requirements. Pricing Optional.
                            </p>
                        </div>
                    </div>


                </div>

                <div class="space-y-6 lg:space-y-10">
                    <div onClick={() => {
                        setContent('rfq')
                        setIsOpen(true)
                    }} class="flex border-2 py-3 px-5 rounded-lg bg-white hover:bg-gray-100 cursor-pointer h-28">
                        <svg class="flex-shrink-0 mt-2 size-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                        <div class="ms-5 sm:ms-8">
                            <h3 class="font-semibold text-gray-800 dark:text-neutral-200">
                                Request for Quotation
                            </h3>
                            <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                                Request for binding proposals based on fixed and standardized scope of work.
                            </p>
                        </div>
                    </div>
                    <div onClick={() => {
                        setContent('solar')
                        setIsOpen(true)
                    }} class="flex border-2 py-3 px-5 rounded-lg bg-white hover:bg-gray-100 cursor-pointer h-28">
                        <svg class="flex-shrink-0 mt-2 size-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
                        <div class="ms-5 sm:ms-8">
                            <h3 class="font-semibold text-gray-800 dark:text-neutral-200">
                                Sole Sourcing
                            </h3>
                            <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                                Run a non-competitive process with a chosen vendor
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <ButtonGroup />
            </div>
        </div>
    )
}
