import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};
const REPOS_URL = 'http://localhost:4000/repos';

export async function getAllRepositories() {
  const repositories = await axios.get(REPOS_URL, { headers });
  return repositories.data;
}
