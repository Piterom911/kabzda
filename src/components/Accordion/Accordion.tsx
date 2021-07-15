import React, {useState} from "react";
import AccordionHeading from "../AccordionHeading/AccordionHeading";
import AccordionBody from "../AccordionBody/AccordionBody";

type AccordionPropsType = {
    heading: string,
}

function Accordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState(true)

    const toggleMenu = () => { setCollapsed(!collapsed) }

    return (
        <div>
            <AccordionHeading toggleMenu={toggleMenu} heading={props.heading}/>
            { !collapsed && <AccordionBody /> }
        </div>
    )
}

export default Accordion;