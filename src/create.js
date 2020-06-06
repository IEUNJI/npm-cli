const path = require('path');
const { promisify } = require('util');
const axios = require('axios');
const Inquirer = require('inquirer');
const downloadGitRepo = promisify(require('download-git-repo'));

const { username, api, msg } = require('./constants');
const { loadingWrapper } = require('./helpers');

const fetchRepos = async () => {
  const { data } = await axios.get(api.repos);
  return data;
};

const downloadRepo = async repo => {
  await downloadGitRepo(`${username}/${repo}`, path.resolve(repo));
};

const create = async () => {
  const reposInfo = await loadingWrapper(fetchRepos, msg.fetchRepos)();
  const reposName = reposInfo.map(item => item.name);
  const { repo } = await Inquirer.prompt({
    name: 'repo',
    type: 'list',
    message: msg.chooseRepo,
    choices: reposName
  });
  await loadingWrapper(downloadRepo, `${msg.downloadRepo}${repo}`)(repo);
  console.log('done!');
};

create();
