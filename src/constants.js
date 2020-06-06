const { version } = require('../package.json');

const username = 'IEUNJI';

const api = {
  repos: `https://api.github.com/users/${username}/repos`
};

const msg = {
  fetchRepos: 'fetching repositories ...',
  chooseRepo: 'please choose a repository:',
  downloadRepo: 'downloading a repository called '
};

module.exports = {
  version,
  username,
  api,
  msg
};
