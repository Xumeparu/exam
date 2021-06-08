import React, { useState } from 'react';

export default function Details({shortText, text}) {
    const [linkState, setLinkState] = useState(true);

    function handleClick() {
        setLinkState(!linkState);
    }

    return (
        <div className='block'>
            <h4>12. Details</h4>
            <span>{shortText}</span>
            {!linkState && <span>{text}</span>}
            <a className='link' onClick={handleClick} data-testid='link'>
                {linkState ? 'подробнее' : 'скрыть'}
            </a>
        </div>
    );
}
