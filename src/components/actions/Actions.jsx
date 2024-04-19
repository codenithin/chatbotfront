import React, { useEffect } from 'react'
import Action from './Action'

export default function Actions({actions}) {
  return (
    <div>
        {actions.map((action, i) => {
            return <Action key={i} text={action.text} link={action.link} />
        })}
    </div>
  )
}
