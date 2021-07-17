import React, {useState} from 'react';

import {Meta, Story} from '@storybook/react';

import AccordionBody, {AccordionBodyPropsType} from "./AccordionBody";
import {v1} from "uuid";

export default {
    title: 'Accordion Body',
    component: AccordionBody,
} as Meta;

const Template: Story<AccordionBodyPropsType> = (args) => <AccordionBody {...args} />

export const AccordionBody1 = Template.bind({})
AccordionBody1.args = {items: [{id: v1(), title: 'First'}]}

// export const Title = () => {
//     const [collapsed, setCollapsed] = useState<boolean>(true)
//     return <AccordionHeading heading={'Menu'} toggleMenu={()=>{}} />
// }