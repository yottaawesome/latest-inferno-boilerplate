# Inferno Boilerplate

## Introduction

This repo is boilerplate to quickly started with building an ES6 Inferno app using the latest dependencies. This repo is set up with Webpack, Babel, Inferno, Inferno Router, and modular SCSS support. The main motivation behind creating this repo is the other boilerplate repos for Inferno I found were either quite out of date with their dependencies or used build tools other than Webpack. In addition, I found Inferno's [create-inferno-app](https://infernojs.org/docs/guides/installation) utility to be a little too magical and a little too "black-boxy" for my comfort.

## :warning: Alert

The client's `package.json` uses `node-sass`, which uses a [vulnerable version](https://nvd.nist.gov/vuln/detail/CVE-2018-20834) of `node-tar`. The [issue](https://github.com/sass/node-sass/issues/2625) is being tracked. I'm currently awaiting for `node-sass` to issue a new version, and then I'll upgrade the dependencies. For now, you might see NPM complaining about this vulnerability.

## Using the code

The `src` folder contains a basic example app using Inferno, Inferno Router, Components, and modular SCSS.

* Clone this repo.
* Run `npm install` to install dependencies.
* Run `npm run dev` to build the `index.js` file.
* Open `helloworld.html` to confirm the file was built successfully. You may consider adding a dev-server to your copy of this project.
* Make whatever changes you need for your project.
