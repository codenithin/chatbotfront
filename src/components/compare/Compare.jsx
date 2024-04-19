import React from 'react'
import CompareHeader from './CompareHeader'
import CompareSection from './CompareSection'

export default function Compare({
  title,
  header,
  sections
}) {
  return (
    <div className="relative">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8  mx-auto">

        <div className="hidden lg:block top-0 start-0 py-2 bg-white/60 backdrop-blur-md ">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-2">
              <span className="font-semibold text-lg text-gray-800 ">
                {title}
              </span>
            </div>

            {
              header.map((x, i) => (
                <div key={i}>
                  <CompareHeader title={x.title} text={x.text} />
                </div>
              ))
            }

          </div>
        </div>

        {
          sections.map((x, i) => (
            <CompareSection title={x.title} data={x.data} headers={x.headers} />
          ))
        }

      </div>
    </div>
  )
}
