import { render, screen } from '@testing-library/react';
import ReverseString from './ReverseString';

test('Тестирование компонента ReverseString', () => {
    const text = 'meow';
    const reverseText = 'woem';

    render(<ReverseString text={text}/>);

    const reverseItem = screen.getByTestId('reverseItem');

    expect(reverseItem).toBeInTheDocument();
    expect(reverseItem).toHaveTextContent(reverseText);
});
