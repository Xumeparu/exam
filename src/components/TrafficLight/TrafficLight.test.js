import { render, screen, act } from '@testing-library/react';
import TrafficLight from './TrafficLight';

const lightsNames = {
    RED: 'redLight',
    YELLOW: 'yellowLight',
    GREEN: 'greenLight'
}

describe('Тестирование компонента TrafficLight', () => {
    test('Верхняя лампа', () => {
        jest.useFakeTimers();

        render(<TrafficLight />);

        const upperLamp = screen.getByTestId('upperLamp');
        expect(upperLamp).toBeInTheDocument();

        expect(upperLamp.className).toBe('lamp ' + lightsNames.RED);
        act(() => {
            jest.advanceTimersByTime(1000);
        });
        expect(upperLamp.className).toBe('lamp ');

        act(() => {
            jest.advanceTimersByTime(3000);
        });
        expect(upperLamp.className).toBe('lamp ' + lightsNames.RED);

        jest.useRealTimers();
    });

    test('Средняя лампа (красный -> желтый)', () => {
        jest.useFakeTimers();

        render(<TrafficLight />);

        const middleLamp = screen.getByTestId('middleLamp');
        expect(middleLamp).toBeInTheDocument();

        expect(middleLamp.className).toBe('lamp ');
        act(() => {
            jest.advanceTimersByTime(1000);
        });
        expect(middleLamp.className).toBe('lamp ' + lightsNames.YELLOW);

        jest.useRealTimers();
    });

    test('Нижняя лампа', () => {
        jest.useFakeTimers();

        render(<TrafficLight />);

        const bottomLamp = screen.getByTestId('bottomLamp');
        expect(bottomLamp).toBeInTheDocument();

        expect(bottomLamp.className).toBe('lamp ');
        act(() => {
            jest.advanceTimersByTime(2000);
        });
        expect(bottomLamp.className).toBe('lamp ' + lightsNames.GREEN);

        jest.useRealTimers();
    });

    test('Средняя лампа (зеленый -> желтый)', () => {
        jest.useFakeTimers();

        render(<TrafficLight />);

        const middleLamp = screen.getByTestId('middleLamp');
        expect(middleLamp).toBeInTheDocument();

        expect(middleLamp.className).toBe('lamp ');
        act(() => {
            jest.advanceTimersByTime(3000);
        });
        expect(middleLamp.className).toBe('lamp ' + lightsNames.YELLOW);

        jest.useRealTimers();
    });
});
