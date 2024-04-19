import { useEffect, useRef, useState } from 'react'
import ChatBubble from './components/ChatBubble'
import BotRespoonse from './components/BotRespoonse'
import Chat from './page/Chat'
import Sidebar from './components/Sidebar'
import RightBar from './components/RightBar'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const responseRef = useRef(null)
  const [bubbles, setBubbles] = useState([])
  const chatRef = useRef(null)
  const currentResponeRef = useRef(null)
  const [text, setText] = useState("")
  const [yesMessage, setYesMessage] = useState("")
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const send = (custom) => {
    if (custom) {
      setTimeout(() => {
        setBubbles(prev => [...prev, <div ref={currentResponeRef} key={Math.random()}><BotRespoonse scrollToBottom={scrollToBottom} setYesMessage={setYesMessage} send={send} scroll={scroll} prompt={custom} responseRef={responseRef} /></div>])
      }, 500)
    } else {
      if (text) {
        if (text.toLowerCase() === "yes" && yesMessage) {
          setBubbles(prev => [...prev, <ChatBubble key={Math.random()} text={text} />])
          setText("")
          setTimeout(() => {
            setBubbles(prev => [...prev, <div ref={currentResponeRef} key={Math.random()}><BotRespoonse scrollToBottom={scrollToBottom} setYesMessage={setYesMessage} send={send} scroll={scroll} prompt={yesMessage} responseRef={responseRef} /></div>])
          }, 500)
        } else {
          setBubbles(prev => [...prev, <ChatBubble key={Math.random()} text={text} />])
          setText("")
          setTimeout(() => {
            setBubbles(prev => [...prev, <div ref={currentResponeRef} key={Math.random()}><BotRespoonse scrollToBottom={scrollToBottom} setYesMessage={setYesMessage} send={send} scroll={scroll} prompt={text} responseRef={responseRef} /></div>])
          }, 500)
        }
      }
    }

  }
  const scroll = () => {
    const div = document.getElementById('chat');
    if (div) {
      const offset = responseRef.current?.offsetTop
      div.scrollTop = offset
    }
  }
  const scrollToBottom = () => {
    const div = document.getElementById('chat');
    if (div) {
      div.scrollTop = div.scrollHeight
    }
  }
  useEffect(() => {
    scroll()
  }, [bubbles])
  return (
    <div id='app' className='h-screen w-screen overflow-x-hidden overflow-y-hidden'>
      {isOpen && <div className='backdrop-blur-[1px] absolute bg-black w-full h-full bg-opacity-10 ' onClick={toggleSidebar}>

      </div>}
      <div
        onClick={toggleSidebar}
        className='fixed top-10 right-10 border p-2 rounded-full hover:bg-slate-200 cursor-pointer'>
        <svg className='w-6' xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.75 2.75h-14a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-14a2 2 0 00-2-2zm-3.09 0v18"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.16 8.27l-3.91 3.48 3.91 3.48"></path></svg>
      </div>
      <div className='z-0'>
        <Sidebar selected={'ask'} />
      </div>
      <Chat
        chatRef={chatRef}
        bubbles={bubbles}
        setBubbles={setBubbles}
        text={text}
        setText={setText}
        send={send}
      />
      <RightBar
        isOpen={isOpen}
        toggle={toggleSidebar}
      />
      {/* <ContractBar /> */}

    </div>
  )
}

export default App
