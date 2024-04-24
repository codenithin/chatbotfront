import { useState, useEffect } from 'react'

const done = "relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-[#2563EB] after:absolute after:left-5  "
const doneSpan = "hover:cursor-pointer w-10 h-10 bg-[#2563EB] border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white "

const selected = "relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-gray-200 after:absolute after:left-4 lg:after:left-5 "
const selectedSpan = "hover:cursor-pointer w-10 h-10 bg-white  border-2 border-[#2563EB] rounded-full flex justify-center items-center mr-3 text-sm text-[#2563EB]"

const notDone = "relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-gray-200 after:absolute after:left-5 "
const notDoneSpan = "hover:cursor-pointer bg-white  border-2 border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm text-black w-10 h-10"

const last = "flex w-full relative text-gray-900"
const lastSpan = "w-8 h-8 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-10 lg:h-10"

const spanBlack = 'text-lg text-black'
const spanBlue = 'text-lg text-[#2563EB]'

export const OptionModalNew = ({ index, currentSelected, text, onClick, isLast }) => {

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
        <>
            <li className={isLast ? last : status} onClick={onClick}>
                <a className="flex items-center font-medium w-full  ">
                    <span className={(isLast && !true) ? lastSpan : statusSpan}>
                        {index + 1}
                    </span>
                    <div className="block">
                        <div className='flex flex-col'>
                            <span className={(currentSelected >= index) ? spanBlue : spanBlack}>{text}</span>

                        </div>
                    </div>
                </a>
            </li>
        </>
    )
}