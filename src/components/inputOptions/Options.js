import React from 'react'
import './Options.css'

function Options({title, Icon , color}) {
    return (
        <div className='input-options'>
            {Icon && <Icon style={{ color: color }} />}
            <h4>{title}</h4>
        </div>
    )
}

export default Options
  