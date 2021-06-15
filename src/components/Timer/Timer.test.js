import {act, render, screen} from '@testing-library/react';
import Timer from './Timer';

test('Температура положительная', () => {
    jest.useFakeTimers();

    const seconds = 10;

    render(<Timer />);

    const secondsItem = screen.getByTestId('secondsItem');
    expect(secondsItem).toBeInTheDocument();
    expect(secondsItem).toHaveTextContent(`${seconds}`);

    act(() => {
        jest.advanceTimersByTime(1000);
    });
    expect(secondsItem).toHaveTextContent(`${seconds - 1}`);

    jest.useRealTimers();
});
