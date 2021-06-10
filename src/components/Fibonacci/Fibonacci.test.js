import { render, screen, fireEvent } from '@testing-library/react';
import Fibonacci from './Fibonacci';

test('Тестирование компонента Fibonacci', () => {
    render(<Fibonacci />);

    const numbers = screen.getByTestId('numbers');

    expect(numbers).toBeInTheDocument();
});
