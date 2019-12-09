[![Build Status](https://travis-ci.org/yottaawesome/latest-inferno-boilerplate.svg?branch=master)](https://travis-ci.org/yottaawesome/latest-inferno-boilerplate) ![Dependencies](https://david-dm.org/yottaawesome/latest-inferno-boilerplate.svg) ![Dev-Dependencies](https://david-dm.org/yottaawesome/latest-inferno-boilerplate/dev-status.svg)

# Inferno Boilerplate

## Introduction

This repo is boilerplate to quickly get started with building an ES6 Inferno app using the latest dependencies. This repo is set up with Webpack, Babel, Inferno, Inferno Router, modular SCSS support, and the Webpack dev server. The main motivation behind creating this repo is the other boilerplate repos for Inferno I found were either quite out of date with their dependencies or used build tools other than Webpack. In addition, I found Inferno's [create-inferno-app](https://infernojs.org/docs/guides/installation) utility to be a little too magical and a little too "black-boxy" for my comfort.

## Status

This project is being continually maintained.

## Using the code

The `src` folder contains a basic example app using Inferno, Inferno Router, Components, and modular SCSS.

* Clone this repo.
* Run `npm install` to install dependencies.
* Run one of the following commands:
    1. `npm run dev` to build the app in `development` mode.
    2. `npm run prod` to build in `production` mode. Note that the prod build extracts the transpiled CSS into `dist/main.css` using `mini-css-extract-plugin`, whereas the dev build bundles it into the JS file.
    3. `npm run start` to start the dev-server.
* Make whatever additional changes you need for your project.

You can optionally use `docker-compose` to start up a container that builds and watches the files. Note that the watch functionality does not work on Windows due to limitations that [prevent changes to files on a Windows host from being propagated to containers](https://forums.docker.com/t/file-system-watch-does-not-work-with-mounted-volumes/12038/20).

## Debugging

Debugging settings are included for VS Code; you'll need the [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) extension.
