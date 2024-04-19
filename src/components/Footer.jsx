import React from 'react'

export default function Footer({ text, setText, send }) {
    return (
        <footer className="sticky bottom-0 z-0 bg-white border-t border-gray-200 pt-2 pb-3 sm:pt-4 sm:pb-6 ">
            <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-3">
                    <button type="button" className="inline-flex justify-center items-center gap-x-2 rounded-lg font-medium text-gray-800 hover:text-blue-600 text-xs sm:text-sm">
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                        New chat
                    </button>

                    <button type="button" className="py-1.5 px-2 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                        <svg className="size-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z" />
                        </svg>
                        Stop generating
                    </button>
                </div>

                {/* <!-- Input --> */}
                <div className="relative">
                    <textarea value={text} onChange={(e) => {
                        setText(e.target.value)
                        e.target.scrollTop = e.target.scrollHeight
                    }} onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            send();
                        }
                    }} id="input-area" className="p-4 pb-12 block w-full border focus:ring focus:border-0 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Ask me anything..."></textarea>

                    {/* <!-- Toolbar --> */}
                    <div className="absolute bottom-px inset-x-px p-2 rounded-b-md bg-white">
                        <div className="flex justify-between items-center">
                            {/* <!-- Button Group --> */}
                            <div className="flex items-center">
                                

                                
                            </div>
                            {/* <!-- End Button Group --> */}

                            {/* <!-- Button Group --> */}
                            <div className="flex items-center gap-x-1">
                                

                                {/* <!-- Send Button --> */}
                                <button onClick={send} id="send-button" type="button" className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                    </svg>
                                </button>
                                {/* <!-- End Send Button --> */}
                            </div>
                            {/* <!-- End Button Group --> */}
                        </div>
                    </div>
                    {/* <!-- End Toolbar --> */}
                </div>
                {/* <!-- End Input --> */}
            </div>
        </footer>
    )
}
