import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button'; // Adjust the import path according to your structure

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

    test('applies the primary style', () => {
        const { getByText } = render(<Button primary label="Primary Button" onClick={() => { }} />);
        const button = getByText('Primary Button');
        expect(button).toHaveClass('storybook-button--primary');
    });

    test('applies the secondary style', () => {
        const { getByText } = render(<Button label="Secondary Button" onClick={() => { }} />);
        const button = getByText('Secondary Button');
        expect(button).toHaveClass('storybook-button--secondary');
    });

    test('sets the button size', () => {
        const { getByText } = render(<Button size="large" label="Large Button" onClick={() => { }} />);
        const button = getByText('Large Button');
        expect(button).toHaveClass('storybook-button--large');
    });

    test('sets the background color', () => {
        const backgroundColor = '#ff0';
        const { getByText } = render(<Button backgroundColor={backgroundColor} label="Colored Button" onClick={() => { }} />);
        const button = getByText('Colored Button');
        expect(button).toHaveStyle(`background-color: ${backgroundColor}`);
    });
});

