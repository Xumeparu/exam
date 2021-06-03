import React, { useState } from 'react';

export default function VariableStepCounter() {
    const [count, setCount] = useState(0);
    let step = 1;

    return (
        <div className='block'>
            <h4>10. Variable step counter</h4>
            <label>Текущее значение: {count}</label>
            &nbsp;
            <button className='count' onClick={() => setCount(step => step + 1)}>+</button>
            <label><input type='range' value={step}/>{step}</label>
            &nbsp;
        </div>
    );
}
