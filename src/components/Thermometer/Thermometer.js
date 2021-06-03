import React from 'react';

export default function Thermometer({ temperature }) {
    const temps = {
        ZERO: 'zeroTemp',
        HOT: 'hotTemp',
        COLD: 'coldTemp'
    }

    function changeTempColour() {
        if (temperature === 0) {
            return temps.ZERO;
        }
        if (temperature > 0) {
            return temps.HOT;
        }
        if (temperature < 0) {
            return temps.COLD;
        }
    }

    return (
        <div className='block'>
            <h4>7. Thermometer</h4>
            <label className={changeTempColour()}>{temperature}</label>
        </div>
    );
}
