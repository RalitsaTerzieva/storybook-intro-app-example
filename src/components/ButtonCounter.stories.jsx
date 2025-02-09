import { ButtonCounter } from "./ButtonCounter";


export default {
    title: 'Counter/ButtonCounter',
    component: ButtonCounter,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {
            control: 'color',
            description: 'please change the background color within the yellow spectrum.',
            table: {
                defaultValue: {summary: '#bcdb99'}
            }
        },
        label: { 
            controls: 'text',
            table: {defaultValue: {summary: 'Click me'}},
            description: 'Other options include: Press, Enter, Go.'
        }
    }
}

// a story where the button size is large

export const Large = {
    args: {
        size: 'large',
        label: 'Click me',
        backgroundColor: "#bcdb99"
    },
    parameters: {
        docs: {
            description: {
                story: 'This is the large button view.'
            }
        }
    }
}

export const Small = {
    args: {
        size: 'small',
        label: 'Click me',
        backgroundColor: "#bcdb99"
    },
    parameters: {
        docs: {
            description: {
                story: 'This is the small button view.'
            }
        }
    }
}

