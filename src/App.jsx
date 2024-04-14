import { useEffect, useRef, useState } from 'react'
import ChatBubble from './components/ChatBubble'
import BotRespoonse from './components/BotRespoonse'
import TableComponent from './components/TableComponent'
import StartBubble from './components/StartBubble'
import Footer from './components/Footer'
import Chat from './page/Chat'
import Welcome from './page/Welcome'
import Sidebar from './components/Sidebar'

function App() {
  const [bubbles, setBubbles] = useState([])
  const chatRef = useRef(null)
  const currentResponeRef = useRef(null)
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
    if (div) {
      div.scrollTop = div.scrollHeight
    }
  }
  useEffect(() => {
    scroll()
  }, [bubbles])
  return (
    bubbles.length ? (
      <div id='app' className='h-screen w-screen overflow-x-hidden dark:bg-[#1E1E1E]'>
        <Sidebar />
        <Chat
          chatRef={chatRef}
          bubbles={bubbles}
          setBubbles={setBubbles}
          text={text}
          setText={setText}
          send={send}
        />
      </div>
    ) : (
      <Welcome bubbles={bubbles} setBubbles={setBubbles} send={send} text={text} setText={setText} />
    )
  )
}

export default App
