import React from "react";

type PropsType = {
    heading: string
    toggleMenu: () => void
};

const headingStyle = {
    cursor: 'pointer',
    display: 'inline-block'
}

function AccordionHeading(props: PropsType) {
    return (
        <h3 onClick={ () => props.toggleMenu() } style={headingStyle}>{props.heading}</h3>
    )
}

export default AccordionHeading;