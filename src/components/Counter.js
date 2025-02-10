import { ButtonCounter } from "./ButtonCounter";
import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        //we want to use always the latest value
        setCount(previouscount => previouscount + 1);
    }

    return (
        <div>
            {count}
            <br/>
            <br/>
            <ButtonCounter
            onClick={handleCount}
            label="Increment"
            size="large"
            backgroundColor="pink"
            buttonVersion="counter-button2"
            />
        </div>
    )
}