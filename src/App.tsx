import React, { useState, useEffect } from 'react';
import '@/App.css';
import RepositoryList from '@/components/repositoryList/RepositoryList';
import GithubServices from '@/services/GithubServices'
import { Repository } from '@/components/Data';
import Loader from './components/Loader';


interface GitHubApiResponse {
  status?: number,
  data?: {
    total_count: number;
    items: Repository[];
  };
}
const App: React.FC = () => {

  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    async function fetchRepositoriesList() {
      const params = {
        sort: 'stars',
        q: 'javascript',
        per_page: 10,
        page: currentPage
      };
      try {
        setPageLoading(true)
        const response: GitHubApiResponse = await GithubServices.getRepositoriesList({ requestSettings: params });
        if (response.status === 200 && response.data?.items) {
          setPageLoading(false)
          setRepositories(response.data?.items);
        }
      } catch (error) {
        setPageLoading(false)
        console.error('error fetching data', error);
      }
    }
    fetchRepositoriesList();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="App">
      <h1>GitHub Profile List</h1>
      {!pageLoading ? <>
        <div>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous Page
          </button>
          <button onClick={handleNextPage}>Next Page</button>
        </div>
        <RepositoryList repositories={repositories} />
        <div>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous Page
          </button>
          <button onClick={handleNextPage}>Next Page</button>
        </div>
      </>: <>
      <Loader/></>}
    </div>
  );
}

export default App;
