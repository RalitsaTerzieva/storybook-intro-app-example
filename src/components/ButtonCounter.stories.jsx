import { ButtonCounter } from "./ButtonCounter";


export default {
    title: 'Counter/ButtonCounter',
    component: ButtonCounter,
}

// a story where the button size is large

export const Large = {
    args: {
        size: 'large',
        label: 'Click me'
    }
}

export const Small = {
    args: {
        size: 'small',
        label: 'Click me'
    }
}

