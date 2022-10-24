import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import Alert from 'react-bootstrap/Alert';
import { getAllRepositories } from './services/repositories';

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

  const repos = repositories as unknown as any[];
  console.log('repos = ', repos);
}
