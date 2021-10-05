import React from 'react'

const Btn=(props)=> {
    const btnCss=`btn ${props.color}  ${props.size}`
    return (

        <button className={btnCss} onClick={props.click}>{props.text}</button>
    )
}

export default Btn
