# Inferno Boilerplate

## Introduction

Boilerplate to get quickly started with Inferno with the latest dependencies. This repo is set up with Babel, Inferno, Inferno Router, and modular SCSS support.

## :warning: Alert

The package.json uses node-sass, which uses a [vulnerable version](https://nvd.nist.gov/vuln/detail/CVE-2018-20834) of node-tar. The [issue](https://github.com/sass/node-sass/issues/2625) is being tracked. I'm currently awaiting for node-sass to issue a new version, and then I'll upgrade the dependencies. For now, you might see NPM complaining about this vulnerability.

## Using

* Clone this repo.
* Run `npm install` to install dependencies.
* Run `npm run dev` to build the `index.js` file.
* Open `helloworld.html` to confirm the file was built successfully. You may consider adding a dev-server to your copy of this project.
* Make whatever changes you need for your project.
