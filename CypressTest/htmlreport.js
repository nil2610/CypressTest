// require('@advanced/cypress-lib').execute();
if (process.argv[2] !== undefined) {

  require('@advanced/cypress-lib').execute({
    env: {
      "configFile": process.argv[2],
      "grepTags": process.argv[3],
    },
    spec: process.argv[4]
  });
}