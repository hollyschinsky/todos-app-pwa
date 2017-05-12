---
layout: module
title: Lesson 1&#58; Project Setup
---

## Overview
This lesson assumes you have the PhoneGap CLI installed. If you have not installed it yet, you can do so now with the following command (requires node):

        npm install -g phonegap

>Alternatively, you could use the Cordova CLI or the PhoneGap Desktop app to create your new project.

## Exercise

1. Create a new folder called **pgday** and `cd` into it:

        mkdir pgday
        cd pgday/

2. Next create your new app project based on an existing PhoneGap project template located in GitHub (where `my-todos` is the path, `com.pgday.todos` is the id and `MyTodos` is the name of your app). 

        phonegap create my-todos --template https://github.com/hollyschinsky/pwa-workshop-starter

        or with Cordova...

        cordova create my-todos --template https://github.com/hollyschinsky/pwa-workshop-starter

>If you only have the Desktop app you can still use it to create a new project and just select the blank template. You will need to download or clone the [pwa-workshop-starter](https://github.com/hollyschinsky/pwa-workshop-starter) app first and then replace the `www` folder and `config.xml` in your newly project with those from the **pwa-workshop-starter** repo. 


**Add plugin dependencies**

## Run it!

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="index.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="lesson2.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
