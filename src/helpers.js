const ora = require('ora');

const loadingWrapper = (fn, msg) => async (...args) => {
  const spinner = ora(msg);
  spinner.start();
  const result = await fn(...args);
  spinner.succeed();
  return result;
};

module.exports = {
  loadingWrapper
};
