import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import RepositoryCard from '@/components/repositoryCard/RepositoryCard';

describe('RepositoryCard Component', () => {
  const mockRepository = {
    id: 1,
    owner: { avatar_url: 'avatar.jpg' },
    full_name: 'Test Repo',
    description: 'A test repository'
  };

  it('renders RepositoryCard correctly', () => {
    render(
      <Provider store={store}>
        <RepositoryCard repository={mockRepository} />
      </Provider>
    );

    // Assert the rendered elements 
    expect(screen.getByText('Toggle:')).toBeInTheDocument();
    expect(screen.getByText('Test Repo')).toBeInTheDocument();
    expect(screen.getByText('A test repository')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('handles toggle correctly', () => {
    render(
      <Provider store={store}>
        <RepositoryCard repository={mockRepository} />
      </Provider>
    );

    // clicking the toggle checkbox
    fireEvent.click(screen.getByRole('checkbox'));

    // Verifying whether the store is updating and the UI reflects the change
    expect(store.getState().repoList[0].enabled).toBe(true);
    const checkboxElement = screen.getByRole('checkbox');
    if (checkboxElement instanceof HTMLInputElement) {
      expect(checkboxElement.checked).toBe(true);
    }
  });
});
