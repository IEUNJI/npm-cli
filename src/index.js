const program = require('commander');

const { version } = require('./constants');

program.version(version);

program
  .command('create')
  .description('create a project')
  .action(() => {
    require('./create');
  });

program.parse(process.argv);
