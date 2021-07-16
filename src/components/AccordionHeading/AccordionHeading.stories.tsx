import React, {useState} from 'react';

import { Meta } from '@storybook/react';

import AccordionHeading from "./AccordionHeading";

export default {
    title: 'Accordion Heading',
    component: AccordionHeading,
} as Meta;

// export const Title = () => {
//     const [collapsed, setCollapsed] = useState<boolean>(true)
//     return <AccordionHeading heading={'Menu'} toggleMenu={()=>{}} />
// }