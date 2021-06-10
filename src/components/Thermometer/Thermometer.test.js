import { render, screen } from '@testing-library/react';
import Thermometer from './Thermometer';

test('Тестирование компонента Thermometer', () => {
    const temperature = 19;

    render(<Thermometer temperature={temperature}/>);

    const tempLabel = screen.getByTestId('tempLabel');

    expect(tempLabel).toBeInTheDocument();
});
