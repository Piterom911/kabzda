import React from "react";

export type AccordionHeadingPropsType = {
    heading: string
    toggleMenu: () => void
};

const headingStyle = {
    cursor: 'pointer',
    display: 'inline-block',
    margin: '0',
}

function AccordionHeading(props: AccordionHeadingPropsType) {
    return (
        <h3 onClick={ () => props.toggleMenu() } style={headingStyle}>{props.heading}</h3>
    )
}

export default AccordionHeading;