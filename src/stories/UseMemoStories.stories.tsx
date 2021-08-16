import React, {useMemo, useState} from "react";
import {v1} from "uuid";
import {Select} from "../components/Select/Select";

export default {
    title: 'Use Memo Demonstration',
}

const Counter = (props: { counter: number }) => {
    console.log('Counter Render')
    return <h2>{props.counter}</h2>
}

const CounterMemo = React.memo(Counter)

export const UseMemo = () => {

    const [counter, setCounter] = useState(0)
    const [cities, setCities] = useState([
        {id: v1(), country: 'Russia', city: 'Moscow', citizens: 17000000},
        {id: v1(), country: 'Russia', city: 'SPB', citizens: 5000000},
        {id: v1(), country: 'Russia', city: 'Sochi', citizens: 360000},
        {id: v1(), country: 'Belarus', city: 'Minsk', citizens: 2000000},
        {id: v1(), country: 'Belarus', city: 'Mogilev', citizens:380000},
        {id: v1(), country: 'Belarus', city: 'Gomel', citizens: 500000},
        {id: v1(), country: 'Ukraine', city: 'Kiev', citizens: 3400000},
        {id: v1(), country: 'Ukraine', city: 'Chernihiv', citizens: 300000},
        {id: v1(), country: 'Ukraine', city: 'Odessa', citizens: 1000000},
        {id: v1(), country: 'USA', city: 'Chicago', citizens: 2710000},
        {id: v1(), country: 'USA', city: 'Austin', citizens: 950000},
        {id: v1(), country: 'USA', city: 'New-York', citizens: 8570000},
    ])

    const countrySelectItems = useMemo(() => {
        return cities.filter( c => c.country === 'Ukraine').map( c => {return {id: c.id, name: c.city}})
    }, [cities])
    const citizensSelectItems = useMemo(() => {
        return cities.filter( c => c.citizens > 1000000 ).map( c => {return {id: c.id, name: c.city}})
    }, [cities])
    const letterSelectM = useMemo( () => {
        return cities.filter( c => c.city[0].toLowerCase() === 'n' ).map( c => {return {id: c.id, name: c.city}})
    },[cities])

    const [countryValue, setCountryValue] = useState(countrySelectItems[0].name)
    const [citizensValue, setCitizensValue] = useState(citizensSelectItems[0].name)
    const [letterValue, setLetterValue] = useState(letterSelectM[0].name)

    const onSetCountry = React.useCallback((value: string)=> {setCountryValue(value)}, [])
    const onSetCitizens = React.useCallback((value: string)=> {setCitizensValue(value)}, [])
    const onSetLetter = React.useCallback((value: string)=> {setLetterValue(value)}, [])

    const addOne = () => setCounter(counter + 1)

    return (
        <div>
            <button onClick={addOne}>Add One to the Counter</button>
            <CounterMemo counter={counter} />
            <br/>
            <br/>
            <Select items={countrySelectItems} currentValue={countryValue} onOptionClick={onSetCountry} />
            <Select items={citizensSelectItems} currentValue={citizensValue} onOptionClick={onSetCitizens} />
            <Select items={letterSelectM} currentValue={letterValue} onOptionClick={onSetLetter} />
        </div>
    )
}