import React from 'react'
import Modal from 'react-modal'
import { useState, useEffect } from 'react'

const done = "flex w-full relative text-[#2563EB]  after:content-['']  after:w-full after:h-0.5  after:bg-[#2563EB] after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4"
const doneSpan = "hover:cursor-pointer w-6 h-6 font-bold bg-[#2563EB] border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white lg:w-12 lg:h-12"

const selected = "flex w-full relative text-gray-900  after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4"
const selectedSpan = "hover:cursor-pointer w-6 h-6 bg-indigo-50 border-2 border-[#2563EB] rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-[#2563EB] lg:w-12 lg:h-12"

const notDone = "flex w-full relative text-gray-900  after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4"
const notDoneSpan = "hover:cursor-pointer w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-12 lg:h-12"

const last = "flex w-full relative text-gray-900  "
const lastSpan = "w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-12 lg:h-12"

export default function OptionModal({ isOpen, setIsOpen, item, itemsProp }) {

    const [currentSelected, setCurrentSelected] = useState(0);
    const [selectedText, setSelectedText] = useState(itemsProp ? itemsProp[0] : '');

    const closeModal = () => {
        setIsOpen(false);
        setTimeout(() => {
            setCurrentSelected(0);
            setSelectedText('');
        }, 200)
    }

    useEffect(() => {
        setSelectedText(itemsProp ? itemsProp[0] : '')
    }, [item])

    useEffect(() => {
        if (!itemsProp) return
        setSelectedText(itemsProp[currentSelected]);
    }, [currentSelected])

    const onClickOption = (i) => {
        return () => {
            setCurrentSelected(i);
        }
    }

    return (
        <Modal
            appElement={document.getElementById('root')}
            isOpen={isOpen}
            className={'shadow-xl h-fit left-1/2 top-[40%] \
            absolute flex flex-col justify-center items-center text-white'}
            shouldFocusAfterRender={false}
            onRequestClose={closeModal}
            closeTimeoutMS={200}
            style={{
                overlay: {
                    background: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(2px)'
                }
            }}
        >
            <div className='bg-white text-black fixed flex flex-col justify-center items-center rounded-md px-20 py-10 min-w-[60%]'>

                <div className='text-4xl font-semibold'>
                    {
                        item === 'rfp' && 'Request For Proposal Steps'
                    }
                    {
                        item === 'rfi' && 'Request For Information Steps'
                    }
                    {
                        item === 'rfq' && 'Request For Quatation Steps'
                    }
                    {
                        item === 'ss' && 'Sole Sourcing'
                    }
                </div>

                <ol className="flex items-center w-full text-xs text-gray-900 font-medium pt-14 pl-[10%]">
                    {
                        itemsProp?.map((x, i) => (
                            <Option index={i} currentSelected={currentSelected} isLast={i === (itemsProp.length - 1)} onClick={onClickOption(i)} />
                        ))
                    }
                </ol>

                <div className='min-h-20 my-14 flex justify-center items-center '>
                    { selectedText && 
                        <div className='text-2xl py-5 bg-gray-50 px-10 rounded-xl border shadow'>
                            {selectedText}
                        </div> 
                    }
                </div>
            </div>
        </Modal>
    )
}

const Option = ({ index, currentSelected, onClick, isLast }) => {

    const [status, setStaus] = useState('');
    const [statusSpan, setStatusSpan] = useState('');

    useEffect(() => {
        if (currentSelected === index) {
            setStaus(selected);
            setStatusSpan(selectedSpan)
        }
        else if (currentSelected > index) {
            setStaus(done);
            setStatusSpan(doneSpan);
        }
        else {
            setStaus(notDone);
            setStatusSpan(notDoneSpan);
        }
    }, [currentSelected])

    return (
        <li className={isLast ? last : status}>
            <div onClick={onClick} className="block whitespace-nowrap z-10">
                <span className={isLast ? lastSpan : statusSpan}>{index + 1}</span>
            </div>
        </li>
    )
}