import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('Тестирование компонента Counter', () => {
    render(<Counter />);

    const countItem = screen.getByTestId('countItem');
    const countBtn = screen.getByTestId('countBtn');
    expect(countItem).toBeInTheDocument();
    expect(countItem).toHaveTextContent('0');
    expect(countBtn).toBeInTheDocument();

    fireEvent.click(countBtn);
    expect(countItem).toHaveTextContent('1');

    fireEvent.click(countBtn);
    expect(countItem).toHaveTextContent('2');
});
