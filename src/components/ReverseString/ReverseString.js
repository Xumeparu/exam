import React from 'react';
import '../../App.css';

export default function ReverseString({ sourceString }) {
    function getReverseString() {
        return [...sourceString].reverse().join('');
    }

    return (
        <div className='block'>
            <h4>4. Reverse string</h4>
            <label>
                <input type='text' value={sourceString} data-testid='sourceString' readOnly={true} />
            </label>
            <label>
                <input type='text' value={getReverseString()} data-testid='reverseString' readOnly={true} />
            </label>
        </div>
    );
}
