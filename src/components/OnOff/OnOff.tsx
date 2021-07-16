import React, {ChangeEvent, useState} from 'react'
import s from './OnOff.module.css'

export type OnOffTypes = {
    onOffClick: (setOn: boolean) => void
    on: boolean
}

export default function(props: OnOffTypes) {

    const indicatorStyle = {
        display: 'inline-block',
        width: '20px',
        height: '20px',
        marginLeft: '10px',
        borderRadius: '5px'
    }

    const onCheckHandler = (e: ChangeEvent<HTMLInputElement>) => props.onOffClick(e.currentTarget.checked)

    return (
        <div className={s.wrapper}>
            <label className={s.label}>
                <input type="checkbox" checked={props.on} onChange={ onCheckHandler } />
                <span className={`${s.customCheckbox} ${props.on && s.checked}`}> </span>
            </label>
            <span style={indicatorStyle} className={`${s.indicator} ${!props.on && s.indicatorOn}`}> </span>
        </div>
    )
    // return (
    //     <div className={s.wrapper}>
    //         <button onClick={ () => {props.onOffClick(true)} } className={`${props.on && s.on}`} disabled={props.on}>On</button>
    //         <button onClick={ () => {props.onOffClick(false)} } className={`${!props.on && s.off}`} disabled={!props.on}>Off</button>
    //         <span style={indicatorStyle}></span>
    //     </div>
    // )
}