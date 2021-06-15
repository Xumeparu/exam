import React from 'react';
import '../../App.css';

export default function ReverseString({ text }) {
    function getReverseString() {
        return [...text].reverse().join('');
    }

    return (
        <div className='block'>
            <h4>4. Reverse string</h4>
            <span data-testid='reverseItem'>{getReverseString()} </span>
        </div>
    );
}
