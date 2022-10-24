import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import Alert from 'react-bootstrap/Alert';
import Repositories from './components/Repositories/Repositories';
import { getAllRepositories } from './services/repositories';
import SpinnerCircle from './components/Spinner/Spinner';

export function App() {
  const [repositories, setRepositories] = useState<AxiosResponse | null | void>(
    null
  );
  async function fetchRepositories() {
    try {
      const repos = await getAllRepositories();
      if (!repos) {
        setRepositories(undefined);
      } else {
        setRepositories(repos);
      }
    } catch (error) {
      setRepositories(undefined);
    }
  }
  useEffect(() => {
    fetchRepositories();
  }, []);

  if (repositories === undefined) {
    return (
      <Alert variant="danger">
        There was an error. Kindly refresh the page
      </Alert>
    );
  }
  if (repositories === null) {
    return <SpinnerCircle />;
  }

  const repos = repositories as unknown as any[];
  return <Repositories repos={repos} />;
}
