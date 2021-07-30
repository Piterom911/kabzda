import React, {useState} from 'react';
import './App.css';
import PageTitle from "./components/PageTitle/PageTitle";
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import {Select, SelectItemType} from "./components/Select/Select";
import {v1} from "uuid";

function App() {

    const itemsSelect: SelectItemType[] = [
        {id: v1(), name: 'Roman'},
        {id: v1(), name: 'Dimych'},
        {id: v1(), name: 'Margo'},
        {id: v1(), name: 'Ignat'},
    ]

    const [on, setOn] = useState(false)
    const [currentValue, setCurrentValue] = useState("")

    const onSelectOptionClick = (name: string) => {
        setCurrentValue(name)
    }

    return (
        <div className="App">
            <PageTitle title="Hello! I am a Page Title!"/>
            <Rating />
            <Accordion heading={'Accordion Heading!'}/>
            <Accordion heading={'Second Accordion is Here!'}/>
            <OnOff on={on} onOffClick={setOn} />
            <Select items={itemsSelect} currentValue={currentValue} onOptionClick={onSelectOptionClick} />
        </div>
    );
}

export default App;
