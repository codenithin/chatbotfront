import React from 'react'
import ContractBar from './ContractBar';

export default function RightBar({ isOpen, toggle }) {
    return (
        <div className={`fixed p-[20px] z-30 right-0 top-0 w-[50%] h-full bg-white shadow-2xl text-black trans ${isOpen ? 'open' : 'close'}`}>
            <div
                onClick={toggle}
                className='fixed top-5 border p-2 rounded-full hover:bg-slate-200 cursor-pointer'>
                <svg className='w-6' xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.75 2.75h-14a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-14a2 2 0 00-2-2zm-3.09 0v18"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.25 8.27l3.91 3.48-3.91 3.48"></path></svg>
            </div>
            <ContractBar />
        </div>
    );
}
