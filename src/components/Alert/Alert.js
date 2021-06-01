import React, { useState, useEffect } from 'react';

export default function Alert({ text, delay }) {
    const [message, setMessage] = useState(text);

    useEffect(() => {
        const timer = setInterval(() => {
            setMessage('');
        }, delay*1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className='block'>
            <h4>5. Alert</h4>
            <label>{message}</label>
        </div>
    );
}
