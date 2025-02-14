import React, { useState } from 'react';
import { ButtonCounter } from './ButtonCounter';
import { Counter } from './Counter';
import { within, userEvent } from "@storybook/test";




export default {
    title: 'Counter/Counter',
    component: Counter,
    tags: ['autodocs'],
    argTypes: {
        onClick: {action: 'clicked'},
        label: { 
            controls: 'text',
            table: {defaultValue: {summary: 'Increment'}},
            description: 'Click for increment the value'
        }
    }
}

export const Default = () => {
    const [ setCount] = useState(0);

    const handleCount = () => {
        setCount(previousCount => previousCount + 1);
    }

    return (
        <Counter>
            <ButtonCounter 
            onClick={handleCount} 
            label="increment"
            backgroundColor="green"
            buttonVersion="counter-button1"
            size="large"
            />
        </Counter>
    )
};

export const IncrementByTwo = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole('button', {name: ButtonCounter});
        await userEvent.click(button);
        await userEvent.click(button);

    }
}




