import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';


export default {
    title: 'Example/input'
};

export const ControlledSimpleInput = () => {
    const [value, setValue] = useState<string>('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value)

    return <input type="text" value={value} onChange={onChangeHandler}/>
}

export const ControlledSimpleCheckbox = () => {
    const [check, setCheck] = useState<boolean>(false)

    const checkboxChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setCheck(event.currentTarget.checked)

    return <input checked={check} type="checkbox" onChange={checkboxChangeHandler} />
}

export const ControlledSimpleSelect = () => {
    const [city, setCity] = useState('1')

    const selectElementChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => setCity(event.currentTarget.value)

    return (
        <select onChange={selectElementChangeHandler} value={city} name="select" id="someID">
            <option value="1">Austin</option>
            <option value="2">Kiev</option>
            <option value="3">Minsk</option>
            <option value="4">Seattle</option>
        </select>
    )
}

export const UncontrolledInputWithButtonSave = () => {
    const [value, setValue] = useState<string>('')

    const inputRef = useRef<HTMLInputElement>(null)

    const onPostHandler = () => {
        const inputType = inputRef.current as HTMLInputElement
        setValue(inputType.value)
    }

    return (
        <>
            <input ref={inputRef} type={'text'}/>
            <button onClick={onPostHandler}>Show value</button>
            <span> {value} </span>
        </>
    )
}

// const Template: Story<HTMLInputElement> = (args) => <input {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
//
// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
