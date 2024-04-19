import React from 'react'

export default function TextImageCell({text, smallText, image}) {
    return (
        <td className="size-px whitespace-nowrap">
                  <div className="px-6 py-2">
                    <div className="flex items-center gap-x-2">
                      <img className='w-6' src={image} alt="" />
                      <div className="grow">
                        <span className="text-sm text-gray-600  ">{text}</span>
                      </div>
                    </div>
                  </div>
                </td>
    )
}
