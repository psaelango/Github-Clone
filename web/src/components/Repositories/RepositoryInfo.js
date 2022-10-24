import React, { useState, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { getAllRepositories } from '../../services/repositories';
import SpinnerCircle from '../Spinner/Spinner';
import Alert from 'react-bootstrap/Alert';
import { Col, Container, Row } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

const displayLastModified = (timestamp) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(timestamp).toLocaleDateString('en-US', options);
};

const RepositoryInfo = () => {
  const { id: repoId } = useParams();
  const [repoInfo, setRepoInfo] = useState(null);

  async function fetchRepositories() {
    try {
      const repos = await getAllRepositories();
      if (!repos) {
        setRepoInfo(undefined);
      } else {
        const currentRepo = repos.find(
          (obj) => obj.id === parseInt(repoId, 10)
        );
        setRepoInfo(currentRepo);
      }
    } catch (error) {
      setRepoInfo(undefined);
    }
  }

  useEffect(() => {
    fetchRepositories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (repoInfo === undefined) {
    return (
      <Alert variant="danger">
        There was an error. Kindly refresh the page
      </Alert>
    );
  }
  if (repoInfo === null) {
    return <SpinnerCircle />;
  }

  return (
    <Container>
      <Row>
        <Col>
          <Toast style={{ marginTop: '2rem' }}>
            <Toast.Header closeButton={false}>
              <strong className="me-auto">{repoInfo.name}</strong>
              <small>
                <FaUserCircle />
                &nbsp;
                {repoInfo.owner.login}
              </small>
            </Toast.Header>
            <Toast.Body>
              <Table>
                <tbody>
                  <tr>
                    <td>Last Commited on </td>
                    <td>{displayLastModified(repoInfo.updated_at)}</td>
                  </tr>
                  <tr>
                    <td>Commit Message </td>
                    <td>{repoInfo.full_name}</td>
                  </tr>
                </tbody>
              </Table>
            </Toast.Body>
          </Toast>
        </Col>
      </Row>
    </Container>
  );
};

export default RepositoryInfo;
