import React from 'react';

export default function Selectbox({ options, onSelect }) {
    return (
        <div className='block'>
            <h4>11. Selectbox</h4>
            <select onChange={e => onSelect(e.target.value)}>
                {options.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}
            </select>
        </div>
    );
}
