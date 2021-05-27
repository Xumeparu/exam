import React from 'react';
import '../App.css';

export default function Like() {
    const state = '♥';
    const [flag, setFlag] = React.useState(false);
    const [colour, setColour] = React.useState('black');

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
            <h1>Like</h1>
            <div className={'heart ' + colour} onClick={changeColour}>{state}</div>
        </div>
    );
}
