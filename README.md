<!--[RM_HEADING]-->
# stylesheet-switcher

<!--[]-->
<!--[RM_DESCRIPTION]-->
> A simple JS component for switching between a list of stylesheets on a website.

<!--[]-->

<!--[RM_BADGES]-->
[![NPM Version](https://img.shields.io/npm/v/stylesheet-switcher.svg?style=flat-square)](http://npm.im/stylesheet-switcher)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Coverage Status](https://coveralls.io/repos/github/uglow/stylesheet-switcher/badge.svg?branch=master)](https://coveralls.io/github/uglow/stylesheet-switcher?branch=master)
[![Dependencies status](https://david-dm.org/uglow/stylesheet-switcher/status.svg?theme=shields.io)](https://david-dm.org/uglow/stylesheet-switcher#info=dependencies)
[![Dev-dependencies status](https://david-dm.org/uglow/stylesheet-switcher/dev-status.svg?theme=shields.io)](https://david-dm.org/uglow/stylesheet-switcher#info=devDependencies)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


<!--[]-->

<!--[RM_INSTALL]-->
## Install

    npm install stylesheet-switcher

<!--[]-->

## Usage

See [https://uglow.github.io/stylesheet-switcher](https://uglow.github.io/stylesheet-switcher)

<!--[RM_CONTRIBUTING]-->
## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).


<!--[]-->

<!--[RM_NEXT_STEPS]-->
## *Next Steps to Setup your Project*

    Remove this section once you are comfortable updating your project.

- [ ] Update [package.json](package.json) with a nice description, then run `yo confit --skip-install --skip-run` and see the README.md file is updated
- [ ] Add a new **dependency** to your project:
  - For a **source-code** dependency:
    1. `npm i {nodeModule} --save`
    1. Edit [confit.yml](confit.yml) and include {nodeModule} as an item inside the `buildJS.vendorScripts` array
    1. `yo confit` to regenerate your build configuration
  - For a **development** dependency:
    1. `npm i {nodeModule} --save-dev`
    1. Edit the configuration file(s) that will need to use this dependency in the areas of the file that will not be overwritten when `yo confit` is run.
     For example:
     ```js

     // Changes in this region will be preserved.

     // START_CONFIT_GENERATED_CONTENT

       // Changes in this region will be overwritten if `yo confit` is run again.

     // END_CONFIT_GENERATED_CONTENT

     // Changes in this region will be preserved.

     ```
  - For a **test** dependency:
    1. `npm i {nodeModule} --save`
    1. Edit [confit.yml](confit.yml) and include {nodeModule} as an item inside the `testUnit.testDependencies` array
    1. Run `yo confit` to regenerate your build configuration
- [ ] Complete the installation of the **semantic release** tool:
  1. Make sure you have:
    - a GitHub login
    - an NPM login
    - a TravisCI login (though you can still proceed if you use a different CI tool)
  1. Run `semantic-release-cli setup` to complete the installation
- [ ] Install code coverage:
  1. Make sure you have:
    - a TravisCI login (though you can still proceed if you use a different CI tool)
    - a [Coveralls](https://coveralls.io) account
  1. Push your code to GitHub.
  1. Login to [Coveralls](https://coveralls.io/).
  1. Press Add Repo. You may need to Sync your GitHub repos to see your new repo in the list.
  1. Select the repo and you will see a "Set Up Coveralls" page. Note the `repo_token` value.
  1. Login to [Travis CI](https://travis-ci.org/).
  1. Edit the settings for this repo (More Settings > Settings).
  1. In the Environment Variables section, create a new envrionment variable called `COVERALLS_REPO_TOKEN` and set its value to the *repo_token* value shown on the "Set Up Coveralls" page, and press "Add".
  1. Push another commit to GitHub and you should get a coverage report now!
- [ ] Add a new module to `src/modules/`
- [ ] Run `npm start`, change the stylesheet and see the changes appear immediately
- [ ] Run `npm test` to execute the unit tests and see the test coverage
- [ ] Run `npm start && test:system` to execute the browser tests
- [ ] Run `git cz` to commit changes with a conventional commit message


<!--[]-->

<!--[RM_LICENSE]-->
## License

This software is licensed under the MIT Licence. See [LICENSE](LICENSE).

<!--[]-->

