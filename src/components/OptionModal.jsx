import React from 'react'
import Modal from 'react-modal'
import RFPOptions from './options/RFPOptions'
import SoleOptions from './options/SoleOptions'
import RFIOptions from './options/RFIOptions'
import RFQOptions from './options/RFQOptions'

export default function OptionModal({ isOpen, setIsOpen, closeViewText, content }) {
    return (
        <Modal
            appElement={document.getElementById('root')}
            isOpen={isOpen}
            className={'shadow-xl shadow-slate-300 h-full w-full absolute flex justify-center items-center border  rounded-md bg-opacity-30 text-white'}
            shouldFocusAfterRender={false}
            onRequestClose={closeViewText}
            closeTimeoutMS={200}
        >
            <div className='bg-black w-full h-full bg-opacity-70 z-50' onClick={() => { setIsOpen(false) }}>
                <div className='mt-10 bg-secondary-3 fixed  left-[42%] top-10  flex justify-between items-center rounded-md'>
                    {
                        content != "rfp" ? (
                            content != 'rfq' ? (
                                content != 'rfi' ? (
                                    <SoleOptions />
                                ) : (
                                    <RFIOptions />
                                )
                            ) : (
                                <RFQOptions />
                            )
                        ) : (
                            <RFPOptions />
                        )
                    }
                </div>
            </div>
        </Modal>
    )
}
