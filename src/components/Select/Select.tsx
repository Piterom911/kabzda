import React, {useState, KeyboardEvent, useEffect} from "react";
import s from "./Select.module.css"

export type SelectPropsType = {
    items: SelectItemType[]
    currentValue: string
    onOptionClick: (name: string) => void
}

export type SelectItemType = {
    id: string
    name: string
}

export function Select(props: SelectPropsType) {
    let tabindex = 0;
    const [isSelectOpened, setIsSelectOpened] = useState<boolean>(false)
    const [hoverOption, setHoverOption] = useState<string>(props.items[0].name)
    useEffect(() => setHoverOption(props.currentValue), [props.currentValue])

    const onSelectTitleClick = () => {
        setIsSelectOpened(!isSelectOpened)
    }

    const options = props.items.map( i => {
        const onHoverHandler = () => {
            props.onOptionClick(i.name)
        }
        tabindex = tabindex + 1;

        return <p tabIndex={tabindex}
                  onMouseEnter={onHoverHandler}
                  className={`${s.option} ${i.name === hoverOption ? s.hoverOption : ''}`}
                  onClick={() => props.onOptionClick(i.name)}
                  key={i.id}>
            {i.name}
        </p>
    } )

    const onKeyDownHandler = (event: KeyboardEvent<HTMLDivElement>) => {
        if(event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            for(let i = 0; i < props.items.length; i++) {
                if(event.key === 'ArrowDown' && i < props.items.length) {
                    if (props.items[i].name === hoverOption) {
                        // setHoverOption(props.items[i + 1].name)
                        props.onOptionClick(props.items[i + 1].name)
                        console.log(i, props.items[i + 1].name)
                        break
                    }

                }
                if(event.key === 'ArrowUp' && i > 0) {

                    if (props.items[i].name === hoverOption) {
                        props.onOptionClick(props.items[i - 1].name)
                        console.log(i, props.items[i - 1].name)
                        break
                    }
                }
            }
        }
    }

    return (
        <div tabIndex={0}
             onKeyDown={onKeyDownHandler}
             onClick={() => onSelectTitleClick()}
             className={s.wrapper + ' ' + s.select}>
            <div className={s.name}>{props.currentValue ? props.currentValue : props.items[0].name}</div>
            <div className={`${s.options} ${isSelectOpened ? s.opened : ''}`}>
                {options}
            </div>
        </div>
    )
}