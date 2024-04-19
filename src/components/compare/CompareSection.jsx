export default function CompareSection({ title, headers, data }) {
    return (
      <div className="space-y-4 lg:space-y-0">
        <>
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            <li className="lg:col-span-2 lg:py-3">
              <span className="text-lg font-semibold text-gray-800 ">
                {title}
              </span>
            </li>
  
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
            </li>
  
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
            </li>
  
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
            </li>
  
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
            </li>
          </ul>
  
          {
            headers.map((header, i) => (
              <ul className="grid lg:grid-cols-6 lg:gap-6">
                <li className="lg:col-span-2 pb-1.5 lg:py-3">
                  <span className="font-semibold lg:font-normal text-sm text-gray-800 ">
                    {header}
                  </span>
                </li>
  
                {
                  data[i].map(x => (
                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
                      <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        {
                          x === 0 &&
                          <svg className="flex-shrink-0 size-5 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                        }
                        {
                          x === 1 &&
                          <svg className="flex-shrink-0 size-5 text-violet-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        }
                        {
                          typeof x === 'string' &&
                          <span className="text-sm text-gray-800 ">
                            {x}
                          </span>
                        }
                      </div>
                    </li>
                  ))
                }
  
              </ul>
            ))
          }
        </>
  
      </div>
    )
  }