import { render, screen, act } from '@testing-library/react';
import Fibonacci from './Fibonacci';

test('Тестирование компонента Fibonacci', () => {
    jest.useFakeTimers();

    render(<Fibonacci />);
    const numbers = screen.getByTestId('numbers');
    expect(numbers).toBeInTheDocument();

    expect(numbers.textContent).toBe('0');

    act(() => {
        jest.advanceTimersByTime(1000);
    });
    expect(numbers.textContent).toBe('0 1');

    act(() => {
        jest.advanceTimersByTime(1000);
    });
    expect(numbers.textContent).toBe('0 1 1');

    act(() => {
        jest.advanceTimersByTime(1000);
    });
    expect(numbers.textContent).toBe('0 1 1 2');

    jest.useRealTimers();
});
