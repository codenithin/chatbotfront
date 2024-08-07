import React, { useEffect, useRef, useState } from 'react'
import StartBubble from '../components/StartBubble'
import Footer from '../components/Footer'
import ChatBubble from '../components/ChatBubble'
import BotRespoonse from '../components/BotRespoonse'

export default function Chat({ bubbles, setBubbles, chatRef, text, setText, send }) {

    return (
        <div className='h-full lg:ml-64'>
            <div id='chat' className="py-10 lg:py-14 h-[80%] overflow-y-scroll">
                {/* <!-- Title --> */}
                <div className="max-w-[95%] px-4 sm:px-6 lg:px-8 mx-auto text-center">

                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl     ">
                        Welcome to Nvelop AI
                    </h1>
                    <p className="mt-3 text-gray-600">
                        Your AI-powered procurement assistant
                    </p>
                </div>
                {/* <!-- End Title --> */}

                <ul ref={chatRef} className="mt-16 space-y-5" id="chat">
                    <StartBubble />
                    {bubbles}
                </ul>
            </div>

            {/* <!-- Search --> */}
            <Footer
                text={text}
                setText={setText}
                send={send}
            />
        </div>
    )
}
