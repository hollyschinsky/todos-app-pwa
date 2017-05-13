---
layout: module
title: Lesson 3&#58; Cross Browser Support via Meta Tags
---

## Overview

## Demo

## Exercise 

1. [iOS Web App Customizations](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html). Add the following `<meta>` tags to define settings for your app when it's used with the iOS Add to Home Screen support.

- Add the `apple-mobile-web-app-capable` `<meta>` tag to setting to your app to run in **standalone** (fullscreen) mode when launched from the home screen using this meta tag:

    <meta name="apple-mobile-web-app-capable" content="yes">

>This setting removes all of the browser chrome around your app, including the URL text field and bottom button bar. Only the status bar will be displayed. Check out [this article](https://medium.com/@firt/dont-use-ios-web-app-meta-tag-irresponsibly-in-your-progressive-web-apps-85d70f4438cb) for specific UX considerations.


- <link rel="apple-touch-startup-image" href="/launch.png">

    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="Todo List">
    <link rel="apple-touch-icon" href="img/icons/apple-touch-icon.png">


2. Windows - add meta tags to designate a Pinned Tile for Windows

    <meta name="msapplication-TileImage" content="img/icons/mstile-150x150.png">
    <meta name="msapplication-TileColor" content="#2F3BA2">

### Considerations
- Round icons for Android will look out of place on other devices

### Resources
- [Don’t use iOS meta tags irresponsibly in your Progressive Web Apps](https://medium.com/@firt/dont-use-ios-web-app-meta-tag-irresponsibly-in-your-progressive-web-apps-85d70f4438cb)


<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="lesson2.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="lesson4.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
