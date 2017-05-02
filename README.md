# README #

watchman watch-del-all
rm -rf node_modules && npm install
npm uninstall react-native-router-flux
npm install --save react-native-router-flux@3.38.0
rm -fr $TMPDIR/react-*
npm cache clean
npm start -- --reset-cache



This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact