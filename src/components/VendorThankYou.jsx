import React from 'react'
import Typewriter from './Typewriter'
import ButtonGroup from './ButtonGroup'

export default function VendorThankYou({scroll, setReady}) {
    return (
        <div className='italic font-semibold' style={{ whiteSpace: 'pre-line' }}>
            <Typewriter setReady={setReady} text={"\"Dear Vendor B\n\nI hope this email finds you well. \n\nThank you for participating in our Talent Acquisition Software RFP process.\n We appreciate the effort you put into your submission. \n\nAfter careful review, we regret to inform you that your proposal has not been selected for further consideration at this time.\n\nPositive Aspects:\n\n- Innovative Solutions: We acknowledge the innovative solutions and features outlined in your proposal. Your approach to competence evaluation was particularly noteworthy and aligns with our organization's future objectives.\n\n- Industry Experience: Your company's demonstrated experience in the talent acquisition software industry is commendable and reflects your expertise in this field.\n\nAreas for Improvement:\n\n- Alignment with Requirements: While your proposal showcased several impressive features, there were areas where it did not fully align with our specific requirements outlined in the RFP. \n\n- Clarification on how your solution addresses our unique needs would have been beneficial.\n\n- Scalability and Integration: We had concerns regarding the scalability and integration capabilities of your software, particularly in relation to our organization's growth trajectory and existing systems.\n\n- Cost Competitiveness: Unfortunately, we received more competitive pricing proposals from other vendors that better fit within our budgetary constraints.\n\nWe want to express our gratitude for your interest in partnering with us and for the time and resources you dedicated to preparing your proposal. \n\nWhile your submission was not selected on this occasion, we encourage you to continue innovating and refining your offerings.\n\nThank you once again for your participation, and we wish you all the best in your future endeavors.\n\nBest regards,\""} delay={3} scroll={scroll} />
        </div>
    )
}
