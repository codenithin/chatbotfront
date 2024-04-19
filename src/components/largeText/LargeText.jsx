import React, { useEffect, useRef } from 'react'
import Typewriter from '../Typewriter'

export default function LargeText({setFinished, scroll, text}) {

    return (
        <div className='italic font-semibold' style={{ whiteSpace: 'pre-line' }}>
            <Typewriter setReady={setFinished} text={text} delay={3} scroll={scroll} />
        </div>
    )
}
