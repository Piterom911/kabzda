import React, {ChangeEvent, useState} from 'react'
import s from './OnOff.module.css'

export type OnOffTypes = {
    onOffClick: (setOn: boolean) => void
    on: boolean
}

export function OnOffBefore(props: OnOffTypes) {

    console.log('OnOf with memo')

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
}

const OnOf = React.memo(OnOffBefore)

export default OnOf