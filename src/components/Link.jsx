import React from 'react'

export default function Link({}) {
  return (
    <div className='text-blue-700 text-lg hover:underline cursor-pointer hover:text-blue-600'
        onClick={() => {
            window.open('/rfp', '_blank')
        }}>Link</div>
  )
}
