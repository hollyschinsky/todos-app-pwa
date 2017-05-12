---
layout: module
title: Lesson 2&#58; PWA Manifest
---

## Overview

## Demo

## Exercise 

<!--TODO - check version thing-->

1. In the `www` folder, create a new file and name it **manifest.json**.

2. Open the new **manifest.json** file in your favorite editor and paste in the following definition:

```     {
        "manifest_version": 1,
        "name": "Todo List",
        "version": "1.0.0",
        "short_name": "TODO's",
        "icons": [{
            "src": "img/icons/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png"
            }, {
            "src": "img/icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
            }, {
            "src": "img/icons/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
            }, {
            "src": "img/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
            }, {
            "src": "img/icons/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
            }],
        "start_url": "/index.html",
        "display": "standalone",
        "background_color": "#3E4EB8",
        "theme_color": "#2F3BA2"
        }
        ```

3. Now we need to open our **index.html** file and add a link to include this new manifest.json file. You can add it anywhere
after the `<style></style>` tags before the closing `</head>` tag.

  <link rel="manifest" href="manifest.json">


<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="lesson1.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="lesson3.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
