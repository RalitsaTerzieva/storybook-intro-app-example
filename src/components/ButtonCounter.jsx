import './buttonCounter.css'

export const ButtonCounter = ({ label, onClick, size, backgroundColor }) => {
    return (
        <div>
            <button className={`counter-button--${size}`} style={backgroundColor && {backgroundColor}} onClick={onClick}>{label}</button>
        </div>
    )
}