import React, { useState, useEffect } from 'react';

export default function Fibonacci() {
    const [numbers, setNumbers] = useState([0]);

    useEffect(() => {
        const timer = setInterval(() => {
            setNumbers(() => {
                if (numbers.length === 1) {
                    return [...numbers, 1]
                }
                return [...numbers, numbers[numbers.length - 1] + numbers[numbers.length - 2]];
            })
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, [numbers]);

    return (
        <div className='block'>
            <h4>3. Fibonacci</h4>
            <div>{numbers.join(" ")}</div>
        </div>
    );
}
