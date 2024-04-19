import React from 'react'
import Modal from 'react-modal'
import { useState, useEffect } from 'react'
import { OptionModal } from './OptionModal';

export default function OptionsModal({ isOpen, setIsOpen, item, itemsProp }) {

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
                            <OptionModal index={i} currentSelected={currentSelected} isLast={i === (itemsProp.length - 1)} onClick={onClickOption(i)} />
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
