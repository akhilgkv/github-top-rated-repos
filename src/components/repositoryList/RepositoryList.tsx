import React from 'react';
import RepositoryCard from '@/components/repositoryCard/RepositoryCard';
import { Repository } from '@/components/Data';
import { ListWrapper } from '@/components/repositoryList/styles/styled';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from '@/redux/store';

interface RepositoryListProps {
  repositories: Repository[];
}

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<p>Loading...</p>}
        persistor={persistor}>
        <ListWrapper>
          {repositories.map((repository) => (
            <RepositoryCard key={repository.id} repository={repository} />
          ))}
        </ListWrapper>
      </PersistGate>
    </Provider>
  );
};

export default RepositoryList;
