import React, { useEffect, useRef } from 'react'
import Typewriter from '../Typewriter'

export default function LargeText({setFinished, scroll, text}) {

    return (
        <div className='italic mb-6' style={{ whiteSpace: 'pre-line' }}>
            <Typewriter setReady={setFinished} text={text} delay={3} scroll={scroll} />
        </div>
    )
}
