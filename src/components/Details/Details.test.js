import { render, screen, fireEvent } from "@testing-library/react";
import Details from './Details';

test('Тестирование компонента Details', () => {
    const shortText = 'Лицензионное соглашение';
    const text = 'Настоящее соглашение дает вам нижеследующие права';

    render(<Details shortText={shortText} text={text} />);

    const link = screen.getByTestId('link');
    expect(screen.getByText(shortText)).toBeInTheDocument();
    expect(screen.queryByText(text)).toBeNull();

    fireEvent.click(link);

    expect(screen.getByText(shortText)).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
});
