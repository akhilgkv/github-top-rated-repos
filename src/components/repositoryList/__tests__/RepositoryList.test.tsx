import { render, screen } from '@testing-library/react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from '@/redux/store';
import RepositoryList from '@/components/repositoryList/RepositoryList';

// Mock data for testing
const mockRepositories = [
  { id: 1, owner: { avatar_url: 'avatar1.jpg' }, full_name: 'Repo 1', description: 'Description 1', flagged: false },
  { id: 2, owner: { avatar_url: 'avatar2.jpg' }, full_name: 'Repo 2', description: 'Description 2', flagged: true },
  // Add more mock repositories as needed
];

describe('RepositoryList Component', () => {
  it('renders RepositoryList correctly with mock data', () => {
    render(
      <Provider store={store}>
        <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
          <RepositoryList repositories={mockRepositories} />
        </PersistGate>
      </Provider>
    );

    // Assert that loading message is not present
    expect(screen.queryByText('Loading...')).toBeNull();

    // Assert that each repository card is rendered
    mockRepositories.forEach((repository) => {
      expect(screen.getByText(repository.full_name)).toBeInTheDocument();
      expect(screen.getByText(repository.description)).toBeInTheDocument();
    });
  });
});
