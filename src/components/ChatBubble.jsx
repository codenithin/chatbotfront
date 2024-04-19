import React from 'react'

export default function ChatBubble({text}) {
    return (
        <li className="py-2 sm:py-4">
            <div className="max-w-[95%] px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="max-w-2xl flex gap-x-2 sm:gap-x-4">
                    <span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
                        <span className="text-sm font-medium text-white leading-none">DH</span>
                    </span>

                    <div className="grow mt-2 space-y-3">
                        <p className="text-gray-800 ">
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </li>
    )
}
