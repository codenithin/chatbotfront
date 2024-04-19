import { useState, useEffect } from 'react'

const done = "flex w-full relative text-[#2563EB]  after:content-['']  after:w-full after:h-0.5  after:bg-[#2563EB] after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4"
const doneSpan = "hover:cursor-pointer w-6 h-6 font-bold bg-[#2563EB] border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white lg:w-12 lg:h-12"

const selected = "flex w-full relative text-gray-900  after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4"
const selectedSpan = "hover:cursor-pointer w-6 h-6 bg-indigo-50 border-2 border-[#2563EB] rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-[#2563EB] lg:w-12 lg:h-12"

const notDone = "flex w-full relative text-gray-900  after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4"
const notDoneSpan = "hover:cursor-pointer w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-12 lg:h-12"

const last = "flex w-full relative text-gray-900  "
const lastSpan = "w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-12 lg:h-12"


export const OptionModal = ({ index, currentSelected, onClick, isLast }) => {

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
                <span className={(isLast && !selected ) ? lastSpan : statusSpan}>{index + 1}</span>
            </div>
        </li>
    )
}