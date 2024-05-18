import React from 'react'

export default function Input(props) {
    return (
        <>
            <input className={props.className} placeholder={props.placeholder} onChange={props.onChange} />
        </>
    )
}
