import { Router, Request, Response } from 'express';
import axios from 'axios';

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  res.status(200);

  const silverorangeRepos = await axios.get('https://api.github.com/users/silverorange/repos');
  const { data } = silverorangeRepos;
  const unForkedRepos = data.filter(
    (repo: any) => repo.fork === false
  );
  silverorangeRepos.data = unForkedRepos;

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  res.json(unForkedRepos);
});
