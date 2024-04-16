import React from 'react'

export default function List({list}) {
  return (
    <ul className='mt-10'>
        {list.map((item, i) => {
            return (
                <li key={i}>{item}</li>
            )
        })}
    </ul>
  )
}
