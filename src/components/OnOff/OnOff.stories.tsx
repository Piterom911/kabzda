import React, {useState} from 'react';

import { Meta } from '@storybook/react';

import  OnOff from './OnOff';

export default {
    title: 'On-Off Switcher',
    component: OnOff,
} as Meta;

export const Switch = () => {
    const [on, setOn] = useState<boolean>(true)
    return <OnOff on={on} onOffClick={setOn} />
}