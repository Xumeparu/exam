import React, { useState, useEffect } from 'react';
import style from './TrafficLight.module.css';

export default function TrafficLight() {
    const lights = {
        RED: 'red',
        YELLOW: 'yellow',
        GREEN: 'green',
        YELLOW_GREEN: 'yellow_green'
    }

    const interval = 1000;
    const [light, setLight] = useState(lights.RED);

    useEffect(() => {
        setTimeout(() => changeColor(), interval)},[]
    );

    function changeColor() {
        setLight((state) => {
            if (state === lights.RED) {
                setTimeout(() => changeColor(), interval);
                return lights.YELLOW;
            }
            else if (state === lights.YELLOW) {
                setTimeout(() => changeColor(), interval);
                return lights.GREEN;
            }
            else if (state === lights.GREEN) {
                setTimeout(() => changeColor(), interval);
                return lights.YELLOW_GREEN;
            }
            else if (state === lights.YELLOW_GREEN) {
                setTimeout(() => changeColor(), interval);
                return lights.RED;
            }
        });
    }

    return (
        <div className='block'>
            <h4>8. Traffic light</h4>
            <div className={`${style.lamp} ${light === lights.RED ? style.redLight : ''}`} data-testid='upperLamp' />
            <div className={`${style.lamp} ${light === lights.YELLOW || light === lights.YELLOW_GREEN ? style.yellowLight : ''}`} data-testid='middleLamp' />
            <div className={`${style.lamp} ${light === lights.GREEN ? style.greenLight : ''}`} data-testid='bottomLamp' />
        </div>
    );
}
