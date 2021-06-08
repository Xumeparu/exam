import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('Тестирование компонента Counter', () => {
    render(<Counter />);

    const countBtn = screen.getByTestId('countBtn');
    expect(countBtn).toBeInTheDocument();

    fireEvent.click(countBtn);
});
