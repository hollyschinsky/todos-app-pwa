---
layout: module
title: Lesson 5&#58; PhoneGap iOS Service Worker Polyfill
---

## Overview
It's a well-known fact that Apple currently does not support service workers on iOS. There's nothing much we can do about this for the browser side of things, however we can do something to add support to our PhoneGap app. There's a plugin available to polyfill the service worker support on iOS called [phonegap-plugin-service-worker](https://github.com/phonegap/phonegap-plugin-service-worker)

> This plugin was originally built by the [Mobile Chrome Apps team](https://github.com/MobileChromeApps) and subsequently forked by the PhoneGap team to help developers have more options when building with PhoneGap.

## Demo

## Exercise

1. Add the phonegap service worker plugin:

    phonegap plugin add https://github.com/phonegap/phonegap-plugin-service-worker

> If you're using a recent version of the PhoneGap CLI, this plugin will automatically be saved to your config.xml. If you are running an older version you can add the `--save` to the command to ensure that it's saved.

2. Open your **config.xml** and look to ensure you see the plugin tag like below:

        <plugin name="phonegap-plugin-service-worker" spec="https://github.com/phonegap/phonegap-plugin-service-worker" />

3. There are a couple of preferences that are used by the plugin and you will also need to add these into your **config.xml** file.

    1. The `ServiceWorker` preference - you need to set this to the filename of the Service Worker JS code to be used when the app is run on iOS
    
    2. The `CacheCordovaAssets` preference - a flag to tell the plugin if you want your Cordova app assets cached when it is first run. The default is true. Set this to false if you do not want your app assets cached.

    Open **config.xml** and add these two preferences with your desired values (or leave off the 2nd if you do want the assets to be cached):

        <preference name="ServiceWorker" value="service-worker.js" />
        <preference name="CacheCordovaAssets" value="false" />

> The value of the ServiceWorker preference should match the service worker file you created previously in the `www` folder. DO NOT include the `www` in the file path as it is assumed to be located there by the plugin.

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="lesson4.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="lesson6.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
