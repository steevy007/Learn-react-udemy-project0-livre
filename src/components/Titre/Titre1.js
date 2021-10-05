import React from 'react'
import classes from './Titre.module.css'
const Titre=(props)=>{
    const style=` ${classes.policeTitre} border border-dark  p-2 m-2  bg-primary rounded text-center text-white`
    return (
        <h1 className={style}>{props.text}</h1>
    );
}

export default Titre

