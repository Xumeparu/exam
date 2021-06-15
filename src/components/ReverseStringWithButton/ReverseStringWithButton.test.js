import { render, screen, fireEvent } from '@testing-library/react';
import ReverseStringWithButton from './ReverseStringWithButton';

test('Тестирование компонента ReverseStringWithButton', () => {
    const text = 'meow';
    const reverseText = 'woem';

    render(<ReverseStringWithButton text={text} />)

    const reverseItem = screen.getByTestId('reverseItem');
    const flipBtn = screen.getByTestId('flipBtn');

    expect(reverseItem).toBeInTheDocument();
    expect(reverseItem).toHaveTextContent(text);
    expect(flipBtn).toBeInTheDocument();

    fireEvent.click(flipBtn);

    expect(reverseItem).toHaveTextContent(reverseText);
});
