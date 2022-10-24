import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';
import { BiGitRepoForked } from 'react-icons/bi';
import { FaFileCode } from 'react-icons/fa';

const RepositoryCard = ({ repo, onLangFilter }) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem', padding: '0px' }}>
      <Card.Header>
        <Card.Title>
          <Link to={`/repository/${repo.id}`} state={{ repoInfo: repo }}>
            {repo.name}
          </Link>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <span className="description">{repo.description}</span>
          </Row>
          <Row className="align-items-center" style={{ margin: '2px' }} />
          <Row>
            <Col>
              {repo.language && (
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => onLangFilter(repo.language)}
                >
                  <span>
                    <FaFileCode />
                  </span>
                  <span>{repo.language}</span>
                </Button>
              )}
            </Col>
            <Col>
              <Badge bg="secondary">
                <span>
                  <BiGitRepoForked />
                </span>
                {repo.forks_count}
              </Badge>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default RepositoryCard;
