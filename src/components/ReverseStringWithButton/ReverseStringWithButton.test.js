import { render, screen, fireEvent } from '@testing-library/react';
import ReverseStringWithButton from './ReverseStringWithButton';

test('Тестирование компонента ReverseStringWithButton', () => {
    const text = 'meow';
    const reverseText = 'woem';

    render(<ReverseStringWithButton text={text} />)

    const flipBtn = screen.getByTestId('flipBtn');
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(flipBtn).toBeInTheDocument();

    fireEvent.click(flipBtn);

    expect(screen.getByText(reverseText)).toBeInTheDocument();
});
