'use strict';

const path = require('path');
const basePath = path.join(__dirname, '/../');
const ghpages = require('gh-pages');
const docOutputDir = path.join(basePath, 'public/');

let callback = (err) => {
  if (!err) {
    console.info(`Published documentation from ${docOutputDir} to /gh-pages branch`);
  } else {
    console.error(err);
  }
};

let options = {
  logger: function(message) {
    console.log(message);
  }
};

// If we are running inside Travis, send the token
if (process.env.GH_TOKEN) {
  options.repo = 'https://' + process.env.GH_TOKEN + '@github.com/uglow/stylesheet-switcher.git';

  // Add some user information for the gh-pages commit
  options.user = {
    email: 'gh-pages@github',
    name: 'GH Pages Committer'
  };
}

ghpages.publish(docOutputDir, options, callback);


