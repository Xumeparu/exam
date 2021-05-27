import React, { useState } from 'react';
import '../../App.css';

export default function Like() {
    const state = '♥';
    const [flag, setFlag] = useState(false);
    const [colour, setColour] = useState('black');

    function changeColour() {
        if (flag) {
            return setColour('red');
        }
        setFlag(true);

        setTimeout(() => {
            setFlag(false);
        }, 800);
    }

    return(
        <div>
            <h4>Like</h4>
            <div className={'heart ' + colour} onClick={changeColour}>{state}</div>
        </div>
    );
}
