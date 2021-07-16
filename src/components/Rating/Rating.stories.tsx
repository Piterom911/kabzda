import React, {useState} from 'react';

import { Meta } from '@storybook/react';

import Rating from "./Rating";

export default {
    title: 'Rating Component',
    component: Rating,
} as Meta;

export const RatingClick = () => {
    return <Rating  />
}