import React, {useState} from 'react'
import s from './OnOff.module.css'

type OnOffTypes = {
    onOffClick: (setOn: boolean) => void
    on: boolean
}

export default function(props: OnOffTypes) {

    const indicatorStyle = {
        display: 'inline-block',
        width: '20px',
        height: '20px',
        marginLeft: '10px',
        backgroundColor: props.on ? 'green' : 'darkred'
    }

    return (
        <div className={s.wrapper}>
            <button onClick={ () => {props.onOffClick(true)} } className={`${props.on && s.on}`} disabled={props.on}>On</button>
            <button onClick={ () => {props.onOffClick(false)} } className={`${!props.on && s.off}`} disabled={!props.on}>Off</button>
            <span style={indicatorStyle}></span>
        </div>
    )
}