import React, { useState } from 'react';

export default function VariableStepCounter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

    function changeHandler(e) {
        setStep(e.target.value);
    }

    return (
        <div className='block'>
            <h4>10. Variable step counter</h4>
            <div>
                <label>Текущее значение: {count}</label>
                <button className='count' onClick={() => setCount(count => count + Number(step))}>+</button>
            </div>
            <div>
                <label>Увеличивать каждый раз на: {step}</label>
            </div>
            <div>
                <input type='range' value={step} min="-50" max="50" onChange={changeHandler}/>
            </div>
        </div>
    );
}
