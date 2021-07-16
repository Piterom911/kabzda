import React, {useState} from 'react';

import { Meta } from '@storybook/react';

import Accordion from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
} as Meta;

export const AccordionTitle = () => {
    return <Accordion heading={'Menu'} />
}