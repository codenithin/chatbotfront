import { useEffect, useRef, useState } from 'react'
import ChatBubble from './components/ChatBubble'
import BotRespoonse from './components/BotRespoonse'
import TableComponent from './components/TableComponent'
import StartBubble from './components/StartBubble'
import Footer from './components/Footer'

function App() {
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
      <div className="py-10 lg:py-14 min-h-[70%]">
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
      <Footer
        text={text}
        setText={setText}
        send={send}
      />
      
    </div>
  )
}

export default App
