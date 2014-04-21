=======
esri-require-js
===============

The purpose of this repository is to try and figure out if it makes sense to use RequireJS as a loader for an app that will reference modules from the ArcGIS API for JavaScript. 

**WARNING:** The instructions below describe a way to get RqquireJS to load modules from the Esri AMD build. However, just because it *can* be done, does not mean that it *should* be done. There are several known issues:
- [It does not work w/ the latest version of RequireJS](https://github.com/tomwayson/esri-require-js/issues/1)
- Loading modules from the AMD build can be very slow and is probably not suitable for production apps
- In order to do a [custom build](https://github.com/robertd/esri-jsapi-rjs-example) you would have to download all the modules you intend to use from the Esri CDN
- I've only tested loading a map w/ a basemap

Beacause of these issues, I'm not actively pursuing this approach, but I'm leaving this repository open to anyone that has good ideas on how to resolve those issues.

## Getting Started

Make sure you have the latest packages installed

```
npm install
bower install
```

Note: If you don't have `npm` installed, make sure you have
[node](http://nodejs.com) installed. If you don't have bower,
`npm install -g bower`.

The above steps will download all the required software to
build and run this app, such as [grunt](http://gruntjs.com),
[requirejs](http://requirejs.org), and [jquery](http://jquery.com).

## Running the server

You can run your app using `grunt preview`. This will start a
server on `localhost:8000`, meaning you can simply go to the
url [localhost:8000/index.htm](http://localhost:8000/index.htm)
while it's running.

If you'd like to run the compiled version, run
`grunt preview-live`.

## Building the application

TODO: see: https://github.com/robertd/esri-jsapi-rjs-example

## Working with the scaffolded app

There's just enough to in place to get you going. Go ahead
and make your changes to `index.htm`. You'll start your
javascript work in `app/main.js` by requiring your first
modules. Past that, well, the world is your oyster.

### Tests

TODO:

## Deploying your application on a server

TODO:
