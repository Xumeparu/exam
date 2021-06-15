import React, { useState, useEffect } from 'react';
import '../../App.css';

export default function Timer() {
    const [seconds, setSeconds] = useState(10);

    useEffect(() => {
        let remainingTime = seconds;
        let timer = 0;

        if (seconds) {
            timer = setInterval(() => {
                if (remainingTime > 0) {
                    remainingTime--;
                    setSeconds(remainingTime);
                }
            }, 1000);
        }
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className='block'>
            <h4>2. Timer</h4>
            <span data-testid='secondsItem'>{seconds}</span>
        </div>
    );
}
