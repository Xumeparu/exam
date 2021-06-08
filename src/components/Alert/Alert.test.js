import { render, screen, act } from '@testing-library/react';
import Alert from './Alert';

test('Тестирование компонента Alert', () => {
    jest.useFakeTimers();

    const delay = 5;

    render(<Alert delay={delay}/>);

    const text = screen.getByTestId('text');
    expect(text).toBeInTheDocument();
    act(() => {
        jest.advanceTimersByTime(delay * 1000);
    });
    expect(screen.queryByTestId('text')).toBeNull();

    jest.useRealTimers();
});

