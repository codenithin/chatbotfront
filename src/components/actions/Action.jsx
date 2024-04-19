import React from 'react'

export default function Action({text, link}) {
    return (
        <a href={"" + link} target='_blank' type="button" class="cursor-pointer mb-2.5 me-1.5 py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-lg border border-blue-600 bg-white text-blue-600 align-middle hover:bg-blue-50 text-sm ">
            {text}
        </a>
    )
}
