import React, { useEffect, useState, useRef } from "react";

export default function SuperCounter() {
    const stepRef = useRef(1);
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setCount(count => count + stepRef.current)
        }, 1000);
    }, []);

    function changeHandler(isInc) {
        if (isInc) {
            setStep(step + 1);
            stepRef.current++;
        } else {
            setStep(step - 1);
            stepRef.current--;
        }
    }

    return (
        <div className='block'>
            <h4>* Super counter</h4>
            <button onClick={() => changeHandler(false)}>-</button>
            &nbsp;{step}&nbsp;
            <button onClick={() => changeHandler(true)}>+</button>
            &nbsp;{count}
        </div>
    );
}
