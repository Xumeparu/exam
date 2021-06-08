import React, { useState, useEffect } from 'react';

export default function Alert({ text, delay }) {
    const [isShow, setIsShow] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsShow(false);
        }, delay * 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className='block'>
            <h4>5. Alert</h4>
            {isShow && <label data-testid='text'>{text}</label>}
        </div>
    );
}
