import { useEffect, useRef, useState } from 'react'
import ChatBubble from './components/ChatBubble'
import BotRespoonse from './components/BotRespoonse'
import TableComponent from './components/TableComponent'
import StartBubble from './components/StartBubble'

function App() {
  const BASE_URL = "http://localhost:3000"
  const chatRef = useRef(null)
  const currentResponeRef = useRef(null)
  const [bubbles, setBubbles] = useState([])
  const [text, setText] = useState("")
  const send = () => {
    if (text) {
      setBubbles(prev => [...prev, <ChatBubble key={Math.random()} text={text} />])
      setText("")
      setTimeout(() => {
        setBubbles(prev => [...prev, <div ref={currentResponeRef} key={Math.random()}><BotRespoonse scroll={scroll} prompt={text} /></div>])
      }, 500)
    }
  }
  const scroll = () => {
    const div = document.getElementById('app');
    div.scrollTop = div.scrollHeight
  }
  useEffect(() => {
    scroll()
  }, [bubbles])
  return (
    <div id='app' className='h-screen w-screen overflow-x-hidden'>
      <div className="py-10 lg:py-14">
        {/* <!-- Title --> */}
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto text-center">

          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            Welcome to Triniti AI
          </h1>
          <p className="mt-3 text-gray-600">
            Your AI-powered copilot for the web
          </p>
        </div>
        {/* <!-- End Title --> */}

        <ul ref={chatRef} className="mt-16 space-y-5" id="chat">
          <StartBubble />
          {bubbles}
        </ul>
      </div>

      {/* <!-- Search --> */}
      <footer className="sticky bottom-0 z-10 bg-white border-t border-gray-200 pt-2 pb-3 sm:pt-4 sm:pb-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            }} onKeyDown={(e) => {
              if (e.key == "Enter") {
                send()
              }
            }} id="input-area" className="p-4 pb-12 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Ask me anything..."></textarea>

            {/* <!-- Toolbar --> */}
            <div className="absolute bottom-px inset-x-px p-2 rounded-b-md bg-white">
              <div className="flex justify-between items-center">
                {/* <!-- Button Group --> */}
                <div className="flex items-center">
                  {/* <!-- Mic Button --> */}
                  <button type="button" className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><line x1="9" x2="15" y1="15" y2="9" /></svg>
                  </button>
                  {/* <!-- End Mic Button --> */}

                  {/* <!-- Attach Button --> */}
                  <button type="button" className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                  </button>
                  {/* <!-- End Attach Button --> */}
                </div>
                {/* <!-- End Button Group --> */}

                {/* <!-- Button Group --> */}
                <div className="flex items-center gap-x-1">
                  {/* <!-- Mic Button --> */}
                  <button type="button" className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></svg>
                  </button>
                  {/* <!-- End Mic Button --> */}

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
      {/* <!-- End Search --> */}
    </div>
  )
}

export default App
