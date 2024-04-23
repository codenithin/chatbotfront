import React from 'react'
import FormQuestion from './FormQuestion'

export default function Form({ questions, title }) {
    return (

        <div className="container mb-20 w-[80%] mx-auto px-4 py-8 mt-20 bg-gradient-to-tl from-[#ff8010] to-[#ff4117] rounded-2xl border shadow-md">
            <h1 className="text-3xl py-10 text-center font-bold mb-4 text-white">{title}</h1>
            <div className="grid grid-cols-1 gap-4">
                {
                    questions.map((x, i) => (
                        <FormQuestion index={i + 1} question={x} />
                    ))
                }
            </div>
        </div>
    )
}
