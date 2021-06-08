import React, { useState } from 'react';

export default function ItemGetter() {
    const [itemId, setItemId] = useState('');
    const [title, setTitle] = useState('');

    function handleChange(e) {
        setItemId(e.target.value);
    }

    async function handleClick() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${itemId}`);

        if (response.ok) {
            const item = await response.json();
            setTitle(item.title);
        }
    }

    return (
        <div className='block'>
            <h4>13. ItemGetter</h4>
            <label>
                <input onChange={handleChange}/>
            </label>
            <button onClick={handleClick}>Получить</button>
            <span>{title}</span>
        </div>
    );
}
