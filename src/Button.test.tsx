import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button'; // Adjust the import path according to your structure

describe('Button Component', () => {
    test('renders the button with the label', () => {
        const { getByText } = render(<Button label="Click Me" onClick={() => { }} />);
        expect(getByText('Click Me')).toBeInTheDocument();
    });

    test('handles click event', () => {
        const handleClick = jest.fn();
        const { getByText } = render(<Button label="Click Me" onClick={handleClick} />);
        fireEvent.click(getByText('Click Me'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});

