import React, { useEffect, useRef } from 'react'
import Typewriter from '../Typewriter'

export default function LargeText({scroll, text}) {

    return (
        <div className='italic font-semibold' style={{ whiteSpace: 'pre-line' }}>
            <Typewriter text={text} delay={3} scroll={scroll} />
        </div>
    )
}
