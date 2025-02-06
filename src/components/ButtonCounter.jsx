import './buttonCounter.css'

export const ButtonCounter = ({ label, onClick, size }) => {
    return (
        <div>
            <button className={`counter-button--${size}`}onClick={onClick}>{label}</button>
        </div>
    )
}