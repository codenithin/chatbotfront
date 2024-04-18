import React from 'react'
import NameCell from './cells/NameCell'
import StatusCell from './cells/StatusCell'
import PortfolioCells from './cells/PortfolioCells'
import CreatedCell from './cells/CreatedCell'
import TextCell from './cells/TextCell'
import TextImageCell from './cells/TextImageCell'
import RateCell from './cells/RateCell'
import CheckCell from './cells/CheckCell'

export default function TableRow({row}) {
    return (
        <tr>
            {row.map((cell, index) => {
                console.log(cell)
                if(cell.type == "TEXT") {
                    return <TextCell key={index} text={cell.content.text} />
                }
                if(cell.type == "TEXT_IMAGE") {
                    return <TextImageCell key={index} text={cell.content.text} image={cell.content.image} />
                }
                if(cell.type == "RATE") {
                    return <RateCell key={index} rate={cell.content.rate} />
                }
                if(cell.type == "CHECK") {
                    return <CheckCell key={index} check={cell.content.check} />
                }
            })}
        </tr>
    )
}
