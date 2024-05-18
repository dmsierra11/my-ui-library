import React from 'react';
import './button.css';
// import './Button.module.css';

// Define an interface for the Button props
interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
    primary = false,
    backgroundColor = null,
    size = 'medium',
    label,
    ...props
}) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <button
            type="button"
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
            style={backgroundColor ? { backgroundColor } : undefined}
            {...props}
        >
            {label}
        </button>
    );
};