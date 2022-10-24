import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import RepositoryCard from './RepositoryCard';

const Repositories = ({ repos = [] }) => {
  const sortedRepos = repos.sort(
    (objA, objB) =>
      Number(new Date(objA.created_at)) - Number(new Date(objB.created_at))
  );
  const [filteredRepos, setFilteredRepos] = useState(sortedRepos);

  const filterByLang = (language) => {
    const langFilteredRepos = filteredRepos.filter(
      (repo) => repo.language === language
    );
    setFilteredRepos(langFilteredRepos);
  };

  if (filteredRepos.length === 0) {
    return <Alert variant="info">No Repositories Found !</Alert>;
  }

  return (
    <Container>
      {filteredRepos.length !== repos.length && (
        <Row>
          Viewing {filteredRepos.length} of {repos.length} repositories
        </Row>
      )}
      <Row>
        {filteredRepos.map((repo) => (
          <RepositoryCard
            key={repo.id}
            repo={repo}
            onLangFilter={(lang) => filterByLang(lang)}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Repositories;
