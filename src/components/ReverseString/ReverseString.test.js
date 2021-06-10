import { render, screen } from '@testing-library/react';
import ReverseString from './ReverseString';

test('Тестирование компонента ReverseString', () => {
    const text = 'meow';

    render(<ReverseString sourceString={text}/>);

    const sourceString = screen.getByTestId('sourceString');
    const reverseString = screen.getByTestId('reverseString');

    expect(sourceString).toBeInTheDocument();
    expect(reverseString).toBeInTheDocument();
});
