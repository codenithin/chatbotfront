import { useEffect, useRef, useState } from 'react'
import ChatBubble from './components/ChatBubble'
import BotRespoonse from './components/BotRespoonse'
import TableComponent from './components/TableComponent'
import StartBubble from './components/StartBubble'
import Footer from './components/Footer'
import Chat from './page/Chat'
import Welcome from './page/Welcome'
import Sidebar from './components/Sidebar'
import ContractBar from './components/ContractBar'
import RightBar from './components/RightBar'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [bubbles, setBubbles] = useState([])
  const chatRef = useRef(null)
  const currentResponeRef = useRef(null)
  const [text, setText] = useState("")
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
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
    const div = document.getElementById('chat');
    if (div) {
      div.scrollTop = div.scrollHeight
    }
  }
  useEffect(() => {
    scroll()
  }, [bubbles])
  return (
    bubbles.length ? (
      <div id='app' className='h-screen w-screen overflow-x-hidden overflow-y-hidden dark:bg-[#1E1E1E]'>
        {isOpen && <div className='backdrop-blur-[1px] absolute bg-black w-full h-full bg-opacity-10 z-20'>

        </div>}
        <div
          onClick={toggleSidebar}
          className='fixed top-10 right-10 border p-2 rounded-full hover:bg-slate-200 cursor-pointer'>
          <svg className='w-6' xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.75 2.75h-14a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-14a2 2 0 00-2-2zm-3.09 0v18"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.16 8.27l-3.91 3.48 3.91 3.48"></path></svg>
        </div>
        <div className='z-10'>
          <Sidebar />
        </div>
        <div className='z-10'>
          <Chat
            chatRef={chatRef}
            bubbles={bubbles}
            setBubbles={setBubbles}
            text={text}
            setText={setText}
            send={send}
          />
        </div>
        <RightBar
          isOpen={isOpen}
          toggle={toggleSidebar}
        />
        {/* <ContractBar /> */}

      </div>
    ) : (
      <Welcome bubbles={bubbles} setBubbles={setBubbles} send={send} text={text} setText={setText} />
    )
  )
}

export default App
