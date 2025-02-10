import { ButtonCounter } from "./ButtonCounter";


export default {
    title: 'Counter/ButtonCounter',
    component: ButtonCounter,
    tags: ['autodocs'],
    argTypes: {
        buttonVersion: {
            control: 'select',
            options: ['counter-button1', 'counter-button2', 'counter-button3'],
            description: 'Choose any of the three options of different styled buttons.'
        },
        onClick: {action: 'clicked'},
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
        },
        size: {
            controls: 'text',
            table: {defaultValue: {summary: 'small'}},
            description: 'Other options include: large.'
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
    argTypes: {
        buttonVersion: {
            control: 'select',
            options: ['counter-button1', 'counter-button2', 'counter-button3'],
            description: 'Choose any of the three options of different styled buttons.'
        },
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
    argTypes: {
        buttonVersion: {
            control: 'select',
            options: ['counter-button1', 'counter-button2', 'counter-button3'],
            description: 'Choose any of the three options of different styled buttons.'
        },
    },
    parameters: {
        docs: {
            description: {
                story: 'This is the small button view.'
            }
        }
    }
}

