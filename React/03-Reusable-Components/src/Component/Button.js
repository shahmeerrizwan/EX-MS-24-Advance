import React from 'react'

export default function Button(props) {
    return (
        <div>
            <button className={props.className}>{props.btnLabel}</button>
        </div>
    )
}
