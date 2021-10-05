import React from 'react'

export default function Alert(props) {
    const style=`alert ${props.alertStyle}`
    return (
        <div className={style} role="alert">
            {props.text}
        </div>
    )
}
