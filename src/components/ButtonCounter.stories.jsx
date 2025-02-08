import { ButtonCounter } from "./ButtonCounter";


export default {
    title: 'Counter/ButtonCounter',
    component: ButtonCounter,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {control: 'color'}
    }
}

// a story where the button size is large

export const Large = {
    args: {
        size: 'large',
        label: 'Click me',
        backgroundColor: "#bcdb99"
    }
}

export const Small = {
    args: {
        size: 'small',
        label: 'Click me'
    }
}

