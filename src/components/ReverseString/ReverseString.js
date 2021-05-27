import React, { useState } from 'react';
import '../../App.css';

export default function ReverseString({text}) {
    const [sourceString, setSourceString] = useState(text);

    function getReverseString() {
        return sourceString.split('').reverse().join('');
    }

    return (
        <div className='block'>
            <h4>4. Reverse string</h4>
            <label>
                <input type='text' value={sourceString} readOnly={true} />
            </label>
            &nbsp;
            <label>
                <input type='text' value={getReverseString()} readOnly={true} />
            </label>
        </div>
    );
}
