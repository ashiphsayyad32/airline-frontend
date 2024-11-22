import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

describe('Header Component', () => {
    test('renders header with title', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        
        expect(screen.getByText('Airline App')).toBeInTheDocument();
    });
}); 