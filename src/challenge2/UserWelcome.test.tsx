import { render, screen, fireEvent } from '@testing-library/react';
import UserWelcome from './UserWelcome';
import { GlobalState, GlobalStateProvider } from './useGlobalState';

const state: GlobalState = {
  currentUser: null,
  theme: 'light',
  isAuthenticated: false
};

describe('UserWelcome', () => {
  const adminState: GlobalState = {
    ...state,
    isAuthenticated: true,
    currentUser: {
      type: 'admin',
      name: 'John Doe',
      email: 'jd@gmail.com',
      id: 1
    }
  }
  it('should show welcome message when button is clicked and user is logged in', () => {
    render(<GlobalStateProvider state={adminState}><UserWelcome /></GlobalStateProvider>);

    // Click the button to show welcome message
    fireEvent.click(screen.getByTestId('show-welcome-button'));

    // Should show the welcome message for a logged in user
    expect(screen.getByTestId('welcome-message')).toBeInTheDocument();
    expect(screen.getByText('Welcome back, John Doe!')).toBeInTheDocument();
    expect(screen.getByText('User type: admin')).toBeInTheDocument();
  });

  it('should show login prompt when no user is logged in', () => {
    render(<GlobalStateProvider state={state}><UserWelcome /></GlobalStateProvider>);

    // debugger
    fireEvent.click(screen.getByTestId('show-welcome-button'));

    expect(screen.getByTestId('welcome-message')).toBeInTheDocument();
    expect(screen.getByText('Please log in to continue')).toBeInTheDocument();
  });
});
