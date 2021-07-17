import React, {useState} from "react";
import AccordionHeading from "../AccordionHeading/AccordionHeading";
import AccordionBody from "../AccordionBody/AccordionBody";
import {v1} from "uuid";

export type AccordionPropsType = {
    heading: string,
}

function Accordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState(true)
    const [bodyItems, setBodyItems] = useState([
        {id: v1(), title: 'First'}
    ])

    const toggleMenu = () => { setCollapsed(!collapsed) }

    return (
        <div>
            <AccordionHeading toggleMenu={toggleMenu} heading={props.heading}/>
            { !collapsed && <AccordionBody items={bodyItems} /> }
        </div>
    )
}

export default Accordion;