import React from 'react';

export default function Thermometer({ temperature }) {
    const temps = {
        ZERO: 'zeroTemp',
        HOT: 'hotTemp',
        COLD: 'coldTemp'
    }

    function changeTempColour() {
        if (temperature < 0) {
            return temps.COLD;
        }
        if (temperature > 0) {
            return temps.HOT;
        }
        return temps.ZERO;
    }

    return (
        <div className='block'>
            <h4>7. Thermometer</h4>
            <label className={changeTempColour()} data-testid='tempLabel'>{temperature}</label>
        </div>
    );
}
