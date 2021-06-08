import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className='block'>
            <h4>9. Counter</h4>
            <button onClick={() => setCount(count => count + 1)} data-testid='countBtn'>Не нажимать</button>
            <label>Количество нажатий: {count}</label>
        </div>
    );
}
