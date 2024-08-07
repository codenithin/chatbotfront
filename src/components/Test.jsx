import React from "react"
import Compare from "./compare/Compare"

const compare = {
  text: "Sure! Hold on a sec...",

  type: 'COMPARE',

  title: 'Vendors',
  header: [
      {
          title: 'Vendor A',
          text: 'SAAS Vendor'
      },
      {
          title: 'Vendor B',
          text: 'SAAS Vendor'
      },
      {
          title: 'Vednor C',
          text: 'SAAS + On Prem'
      },
      {
          title: 'Vendor D',
          text: 'SAAS + On Prem'
      }
  ],

  sections: [
      {
          title: 'Pricing',
          headers: [
              'Number of seats',
              'Cloud Storage',
              'License Cost',
              'Average Consulting Rate per Hour'
          ],
          data: [
              [
                  '1000',
                  'Up to 500',
                  '200',
                  'Unlimited'
              ],
              [
                  '10 TB',
                  '1 TB',
                  '15 TB',
                  'Unlimited'
              ],
              [
                  '230€ per user',
                  '180€ per user',
                  '287€ per user',
                  '376€ per user'
              ],
              [
                  '52€',
                  '56€',
                  '42€',
                  '47€'
              ],
          ]
      },
      {
          title: 'Functional Requirements',
          headers: [
              'Integration with HRM Systems',
              'System Scalability'
          ],
          data: [
              [
                  0,
                  0,
                  1,
                  1
              ],
              [
                  0,
                  1,
                  1,
                  1
              ]
          ]
      },
      {
          title: 'Non Functional Requirements',
          headers: [
              'Application growth',
              'Average tokens consumed',
              'Integration APIs',
              'EHS Compliance',
              'Transaction volume',
              'Maximum Archival Data',
              'Large Language Models',
              'High Availability',
          ],
          data: [
              [
                  0,
                  0,
                  1,
                  1
              ],
              [
                  0,
                  1,
                  1,
                  1
              ],
              [
                  0,
                  0,
                  0,
                  1
              ],
              [
                  0,
                  1,
                  1,
                  1
              ],
              [
                  0,
                  0,
                  1,
                  1
              ],
              [
                  0,
                  0,
                  0,
                  1
              ],
              [
                  0,
                  0,
                  0,
                  1
              ],
              [
                  0,
                  1,
                  1,
                  1
              ]
          ]
      },
      {
          title: 'Pricing Parameters',
          headers: [
              'Year on Year Savings',
              'Payment Terms',
              'Adherence to Payment Terms',
          ],
          data: [
              [
                  0,
                  0,
                  1,
                  1
              ],
              [
                  0,
                  1,
                  1,
                  1
              ],
              [
                  0,
                  0,
                  0,
                  1
              ],
          ]
      }
  ]
}

export default function Test() {
  return (
    <div>
      <Compare title={compare.title} header={compare.header} sections={compare.sections} />
    </div>
  )
}
