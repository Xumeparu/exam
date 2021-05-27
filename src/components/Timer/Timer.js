import React, { useState, useEffect } from 'react';
import '../../App.css';

export default function Timer() {
    const [seconds, setSeconds] = useState(10);

    useEffect(() => {
        let remainingTime = seconds;
        let timerId = 0;

        if (seconds) {
            timerId = setInterval(() => {
                if (remainingTime > 0) {
                    remainingTime--;
                    setSeconds(remainingTime);
                }
            }, 1000);
        }
        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div>
            <h4>Timer</h4>
            <div>{seconds}</div>
        </div>
    );
}
