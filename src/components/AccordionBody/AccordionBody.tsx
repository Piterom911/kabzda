import React from "react";

export type AccordionBodyPropsType = {
    /**
     * Hello! You can read more about [TypeDoc Here](https://typedoc.org/)
     **/
    items: Array<AccordionBodyItemPropsType>
}

export type AccordionBodyItemPropsType = {
    id: string
    title: string
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map( i => <li key={i.id}>{i.title}</li>)}
        </ul>
    )
}

export default AccordionBody;