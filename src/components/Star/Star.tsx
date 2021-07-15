import React from 'react';
import IconStar from '../../icons/IconStar';
import { RatingPropsType } from '../Rating/Rating';

type StarPropsType = {
    id: RatingPropsType
    checked: boolean
    changeValue: (id: RatingPropsType) => void
}

function Star(props: StarPropsType) {
    return <span onClick={ () => props.changeValue(props.id) }>{props.checked ? <IconStar fill={'#ffc107'} /> : <IconStar />}</span>
}

export default Star;