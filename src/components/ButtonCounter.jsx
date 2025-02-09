import './buttonCounter.css'

export const ButtonCounter = ({ label, onClick, size, backgroundColor, buttonVersion }) => {
    return (
        <div>
            <button className={[buttonVersion, `counter-button--${size}`].join(' ')} style={backgroundColor && {backgroundColor}} onClick={onClick}>{label}</button>
        </div>
    )
}