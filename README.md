
# React Progressive Web App

Progressive web apps (PWAs) work offline, enhancing resilience and allowing developers create seamless user experiences that feel like native apps. Learn how to build your own PWAs using React, the flexible front-end framework, in this course with Eve Porcello. Eve explains how to build the PWA component, fetch data, use Lighthouse to validate your app, and add offline capabilities to keep your app running even when the internet is down. Plus, learn how to install your app locally with browsers like Chrome and Safari for iOS.

## Register the service worker 

In the _Index.js_ file register the _Service Worker_
 ```javascript
serviceWorker.register()
```

## create an optimized production build 

Install _serve_ globally 
```shell
$ npm install -g serve
```
Build and serve 
```shell
$ npm run build
$ serve -s build
```

