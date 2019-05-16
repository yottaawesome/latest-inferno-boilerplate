# Inferno Boilerplate

## Introduction

This repo is boilerplate to quickly get started with building an ES6 Inferno app using the latest dependencies. This repo is set up with Webpack, Babel, Inferno, Inferno Router, and modular SCSS support. The main motivation behind creating this repo is the other boilerplate repos for Inferno I found were either quite out of date with their dependencies or used build tools other than Webpack. In addition, I found Inferno's [create-inferno-app](https://infernojs.org/docs/guides/installation) utility to be a little too magical and a little too "black-boxy" for my comfort.

## Using the code

The `src` folder contains a basic example app using Inferno, Inferno Router, Components, and modular SCSS.

* Clone this repo.
* Run `npm install` to install dependencies.
* Run `npm run dev` to build the `index.js` file in dev mode, or run `npm run prod` to build in prod mode. Note that the prod build extracts the transpiled CSS into `dist/main.css` using `mini-css-extract-plugin`, whereas the dev build bundles it into the JS file. You thus may wish to customize your project to either build prod into a separate dir or delete the contents of the `dist` directory prior to rebuilding.
* Open `helloworld.html` to confirm the file was built successfully. You may consider adding a dev-server to your copy of this project.
* Make whatever additional changes you need for your project.
