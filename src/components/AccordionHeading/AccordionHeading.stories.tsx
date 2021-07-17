import React, {useState} from 'react';

import {Meta, Story} from '@storybook/react';

import AccordionHeading, {AccordionHeadingPropsType} from "./AccordionHeading";

export default {
    title: 'Accordion Heading',
    component: AccordionHeading,
} as Meta;

const Template: Story<AccordionHeadingPropsType> = args => <AccordionHeading {...args} />

export const AccordionCollapsed = Template.bind({})
AccordionCollapsed.args = {
    heading: 'Accordion Heading',
    toggleMenu: () => {}
}

// export const Title = () => {
//     const [collapsed, setCollapsed] = useState<boolean>(true)
//     return <AccordionHeading heading={'Menu'} toggleMenu={()=>{}} />
// }