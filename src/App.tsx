import React, {useState} from 'react';
import './App.css';
import PageTitle from "./components/PageTitle/PageTitle";
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import {Select, SelectItemType} from "./components/Select/Select";

type AppPropsType = {
    selectItems: SelectItemType[]
}

function App(props: AppPropsType) {

    const [on, setOn] = useState(false)
    const [currentValue, setCurrentValue] = useState(props.selectItems[0].name)

    const onSelectOptionClick = (name: string) => {
        setCurrentValue(name)
    }

    const call = React.useCallback((name: string) => {
        setCurrentValue(name)
    }, [])

    return (
        <div className="App">
            <PageTitle title="Hello! I am a Page Title!"/>
            <Rating />
            <Accordion heading={'Accordion Heading!'}/>
            <OnOff on={on} onOffClick={setOn} />
            <Select items={props.selectItems} currentValue={currentValue} onOptionClick={call} />
        </div>
    );
}

export default App;
