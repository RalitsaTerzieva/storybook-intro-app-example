export const ButtonCounter = ({ label, onClick, size }) => {
    return (
        <div>
            <button onClick={onClick}>{label}</button>
        </div>
    )
}