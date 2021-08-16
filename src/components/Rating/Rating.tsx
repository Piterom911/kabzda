import React, {useState} from 'react';
import Star from "../Star/Star";
import s from './Rating.module.css'

export type RatingPropsType =   0 | 1 | 2 | 3 | 4 | 5

function RatingBefore() {
    console.log('Rating with memo')

    const [value, setValue] = useState<RatingPropsType>(0)

    let ratingValue = value;

    const changeValue = (id: RatingPropsType) => { setValue(id) }

    return (
        <div className={s.wrapper}>
            <Star changeValue={changeValue} id={1} checked={ratingValue > 0}/>
            <Star changeValue={changeValue} id={2} checked={ratingValue > 1}/>
            <Star changeValue={changeValue} id={3} checked={ratingValue > 2}/>
            <Star changeValue={changeValue} id={4} checked={ratingValue > 3}/>
            <Star changeValue={changeValue} id={5} checked={ratingValue > 4}/>
        </div>
    )
}

const Rating = React.memo(RatingBefore)

export default Rating;