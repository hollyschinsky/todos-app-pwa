---
layout: module
title: Lesson 3&#58; Cross Browser Support via Meta Tags
---

## Overview
It's a pretty well known fact that service workers are not supported on Apple, however, there are still things you can do to make your apps more "Progressive Web App" like across platforms. There are various meta tags that are supported and in this exercise you will add them to your app so you can see how they work.

## Exercise 

1. [iOS Web App Customizations](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html). Add the following `<meta>` tags to define settings for your app when it's used with the iOS Add to Home Screen support.

- Add the `apple-mobile-web-app-capable` `<meta>` tag to setting to your app to run in **standalone** (fullscreen) mode when launched from the home screen using this meta tag:

    `<meta name="apple-mobile-web-app-capable" content="yes">`

>This setting removes all of the browser chrome around your app, including the URL text field and bottom button bar. Only the status bar will be displayed. Check out [this article](https://medium.com/@firt/dont-use-ios-web-app-meta-tag-irresponsibly-in-your-progressive-web-apps-85d70f4438cb) for specific UX considerations.


- Set the startup image to launch when your app is launched from the home screen:

    `<link rel="apple-touch-startup-image" href="img/launch.png">`

- Set the status bar color to use when the app is launched from the home screen:

    `<meta name="apple-mobile-web-app-status-bar-style" content="black">`

>There are three options to choose from: default, black, and black-translucent. The most compatibility is black; default and black-translucent behave differently between iOS 6 and 7. (Sometimes on iOS 7+, the status bar starts as white-on-white or black-on-black and requires a restart of the app to fix it).

- Set the title to display for your app when it's added to the home screen:

    `<meta name="apple-mobile-web-app-title" content="Todo List">`

>If you don't specify this tag, iOS will use the `<title>` tag. If that is missing too, it will default to “Favorites”. Also note that the title is limited to 8 to 12 characters.    

-  Set the icon to use when the app is added to the home screen:

    `<link rel="apple-touch-icon" href="img/icons/apple-touch-icon.png">`

>By default, the icon is a screenshot of the page. If there are no icon tags, Safari will try the following URLs depending on the device:

        - /apple-touch-icon-180x180-precomposed.png
        - /apple-touch-icon-180x180.png
        - /apple-touch-icon-precomposed.png
        - /apple-touch-icon.png

>If you set the rel to apple-touch-icon instead of apple-touch-icon-precomposed, iOS 6 will apply a glossy icon finish. For consistency with iOS 7+, use precomposed icons.

2. Windows 

- Set the tile image to use when the app is pinned to the home screen:

    <meta name="msapplication-TileImage" content="img/icons/mstile-150x150.png">

- Set a color for the tile to use when the app is pinned to the home screen:

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
