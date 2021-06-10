import {act, fireEvent, render, screen} from '@testing-library/react';
import Like from './Like';

test('Тестирование компонента Heart', () => {
    render(<Like />);

    const heart = screen.getByTestId('heart');
    expect(heart).toBeInTheDocument();
    expect(heart.className).toBe('heart black');

    jest.useFakeTimers();

    fireEvent.click(heart);
    act(() => {
        jest.advanceTimersByTime(800);
    });
    fireEvent.click(heart);
    expect(heart.className).toBe('heart black');

    act(() => {
        jest.clearAllTimers();
    });

    fireEvent.click(heart);
    act(() => {
        jest.advanceTimersByTime(799);
    });
    fireEvent.click(heart);
    expect(heart.className).toBe('heart red');

    jest.useRealTimers();
});
