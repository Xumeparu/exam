import { render, screen } from '@testing-library/react';
import Thermometer from './Thermometer';

const temps = {
    ZERO: 'zeroTemp',
    HOT: 'hotTemp',
    COLD: 'coldTemp'
}

describe('Тестирование компонента Thermometer', () => {
    test('Температура 0', () => {
        const temperature = 0;

        render(<Thermometer temperature={temperature}/>);

        const tempLabel = screen.getByTestId('tempLabel');
        expect(tempLabel).toBeInTheDocument();
        expect(tempLabel.className).toBe(temps.ZERO);
    });

    test('Температура отрицательная', () => {
        const temperature = -19;

        render(<Thermometer temperature={temperature}/>);

        const tempLabel = screen.getByTestId('tempLabel');
        expect(tempLabel).toBeInTheDocument();
        expect(tempLabel.className).toBe(temps.COLD);
    });

    test('Температура положительная', () => {
        const temperature = 50;

        render(<Thermometer temperature={temperature}/>);

        const tempLabel = screen.getByTestId('tempLabel');
        expect(tempLabel).toBeInTheDocument();
        expect(tempLabel.className).toBe(temps.HOT);
    });
})

