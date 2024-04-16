import React from 'react'
import Typewriter from './Typewriter'
import ButtonGroup from './ButtonGroup'

export default function Strategy({ scroll, setReady }) {
    return (
        <div className='italic font-semibold' style={{ whiteSpace: 'pre-line' }}>
            <Typewriter setReady={setReady} text={"●	Pricing: \n\n - Negotiate the hourly rates that are 15% higher than with the Vendor B.\n  - Negotiate the invoicing to start only after the go-live. (and not already during the deployment project)\n  - The SaaS fees are increasing 5% per year.\n  - Negotiate this lower.\n\n\n● Licensing Terms:\n\n  Discuss the type of software license (e.g., perpetual, subscription-based) and any restrictions on usage, transferability, or number of users.\n\n\n● Service Level Agreements (SLAs):\n\n  Ask the Vendor A to define the performance metrics in detail, including uptime guarantees, and support response times to ensure service quality meets our needs.\n\n\n● Customization Options:\n\n Negotiate the scope and cost of customizations to tailor the software to our specific requirements.●	Implementation Services: ○	Clarify responsibilities for software installation, data migration, training, and ongoing support during the implementation phase.\n\n\n● Support and Maintenance:\n\n Determine the level of support provided post-implementation, including software updates, bug fixes, and technical assistance.\n\n\n ● Data Security and Compliance:\n\n Address data security measures, compliance with industry regulations (e.g., GDPR, HIPAA), and data ownership rights.\n\n\n ● Termination Clause:\n\n Negotiate the terms for terminating the agreement, including exit procedures (including termination for convenience), data extraction, and any associated costs or penalties.\n\n\n ● Performance Guarantees:\n\n Seek assurances regarding the performance and reliability of the software under expected usage conditions.\n\n\n ● Dispute Resolution:\n\n Vendor A is proposing Ireland as the place of jurisdiction. Make sure this is ok for you or negotiate your preferred location"} delay={3} scroll={scroll} />
            <div className='mt-6'>
                <ButtonGroup />
            </div>
        </div>
    )
}
