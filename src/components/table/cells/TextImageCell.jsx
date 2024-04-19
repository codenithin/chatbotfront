import React from 'react'

export default function TextImageCell({text, smallText, image}) {
    return (
        <td class="size-px whitespace-nowrap">
                  <div class="px-6 py-2">
                    <div class="flex items-center gap-x-2">
                      <img className='w-6' src={image} alt="" />
                      <div class="grow">
                        <span class="text-sm text-gray-600  ">{text}</span>
                      </div>
                    </div>
                  </div>
                </td>
    )
}
