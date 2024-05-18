import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
    const mockOnLogin = jest.fn();
    const mockOnLogout = jest.fn();
    const mockOnCreateAccount = jest.fn();

    it('should display login and signup buttons when user is not logged in', () => {
        render(<Header user={null} onLogin={mockOnLogin} onLogout={mockOnLogout} onCreateAccount={mockOnCreateAccount} />);
        expect(screen.getByText('Log in')).toBeInTheDocument();
        expect(screen.getByText('Sign up')).toBeInTheDocument();
    });

    it('should display logout button and welcome message when user is logged in', () => {
        const user = { name: 'John Doe' };
        render(<Header user={user} onLogin={mockOnLogin} onLogout={mockOnLogout} onCreateAccount={mockOnCreateAccount} />);
        expect(screen.getByText((content, element) => {
            const hasText = (node: Element | null) => node !== null && node.textContent === "Welcome, John Doe!";
            const nodeHasText = hasText(element);
            const childrenDontHaveText = element ? Array.from(element.children).every(child => !hasText(child as Element)) : false;

            return nodeHasText && childrenDontHaveText;
        })).toBeInTheDocument();
        expect(screen.getByText('Log out')).toBeInTheDocument();
    });

    it('should call onLogin when login button is clicked', () => {
        render(<Header user={null} onLogin={mockOnLogin} onLogout={mockOnLogout} onCreateAccount={mockOnCreateAccount} />);
        fireEvent.click(screen.getByText('Log in'));
        expect(mockOnLogin).toHaveBeenCalled();
    });

    it('should call onLogout when logout button is clicked', () => {
        const user = { name: 'John Doe' };
        render(<Header user={user} onLogin={mockOnLogin} onLogout={mockOnLogout} onCreateAccount={mockOnCreateAccount} />);
        fireEvent.click(screen.getByText('Log out'));
        expect(mockOnLogout).toHaveBeenCalled();
    });

    it('should call onCreateAccount when signup button is clicked', () => {
        render(<Header user={null} onLogin={mockOnLogin} onLogout={mockOnLogout} onCreateAccount={mockOnCreateAccount} />);
        fireEvent.click(screen.getByText('Sign up'));
        expect(mockOnCreateAccount).toHaveBeenCalled();
    });
});


