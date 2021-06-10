import { render, screen } from '@testing-library/react';
import Like from './Like';

test('Тестирование компонента Heart', () => {
    render(<Like />);

    const heart = screen.getByTestId('heart');

    expect(heart).toBeInTheDocument();
});
