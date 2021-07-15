import React, {useState} from 'react';
import './App.css';
import PageTitle from "./components/PageTitle/PageTitle";
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";

function App() {

    const [on, setOn] = useState(false)

    return (
        <div className="App">
            <PageTitle title="Hello! I am a Page Title!"/>
            <Rating />
            <Accordion heading={'Accordion Heading!'}/>
            <Accordion heading={'Second Accordion is Here!'}/>
            <OnOff on={on} onOffClick={setOn} />
        </div>
    );
}

export default App;
