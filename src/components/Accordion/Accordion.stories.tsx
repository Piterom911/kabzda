import React, {useState} from 'react';

import {Meta, Story} from '@storybook/react';

import Accordion, {AccordionPropsType} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
} as Meta;

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />

export const AccordionTitle = Template.bind({})
AccordionTitle.args = {heading: 'Menu2'}

// export const AccordionTitle = () => {
//     return <Accordion heading={'Menu'} />
// }