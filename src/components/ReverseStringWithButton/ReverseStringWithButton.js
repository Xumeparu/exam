import React, { useState } from 'react';

export default function ReverseStringWithButton({ text }) {
    const [reverseString, setReverseString] = useState(text);

    function getReverseString() {
        setReverseString([...reverseString].reverse().join(''));
    }

    return (
        <div className='block'>
            <h4>6. Reverse string with button</h4>
            <label>{reverseString}</label>
            &nbsp;
            <button onClick={getReverseString}>Перевернуть</button>
        </div>
    );
}
