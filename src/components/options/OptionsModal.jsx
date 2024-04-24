import React from 'react'
import Modal from 'react-modal'
import { useState, useEffect } from 'react'
import { OptionModalNew } from './OptionModalNew';

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
            className={'shadow-xl h-fit left-1/2 top-[50%] \
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
            <div className='bg-white text-black fixed flex flex-col justify-center items-center rounded-md py-10 min-w-[60%]'>

                <div className='text-4xl font-semibold pb-10'>
                    {
                        item === 'rfp' && 'Request For Proposal Steps'
                    }
                    {
                        item === 'rfi' && 'Request For Information Steps'
                    }
                    {
                        item === 'rfq' && 'Request For Quotation Steps'
                    }
                    {
                        item === 'ss' && 'Sole Sourcing'
                    }
                </div>

                <ol className="space-y-8 pl-20 flex flex-col justify-start items-start pt-10 overflow-y-scroll h-[30rem] w-full">
                    {
                        itemsProp?.map((x, i) => (
                            <OptionModalNew index={i} text={x} currentSelected={currentSelected} isLast={i === (itemsProp.length - 1)} onClick={onClickOption(i)} />
                        ))
                    }
                </ol>
            </div>
        </Modal>
    )
}