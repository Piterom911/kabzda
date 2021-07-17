import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';


export default {
    title: 'Example/input'
};

export const SimpleInput = () => {
    const [value, setValue] = useState<string>('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value)

    return <input type="text" value={value} onChange={onChangeHandler}/>
}

export const SimpleInputButton = () => {
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
