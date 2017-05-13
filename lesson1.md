---
layout: module
title: Lesson 1&#58; Project Setup
---

## Overview
This lesson assumes you have the PhoneGap CLI installed. If you have not installed it yet, you can do so now with the following command (requires node):

        npm install -g phonegap

>Alternatively, you could use the Cordova CLI or the PhoneGap Desktop app to create your new project.

## Exercise
1. Create a new folder on your desktop called **pgday** and navigate into it

        mkdir pgday
        cd pgday/

1. Get a copy of [the final app project](https://github.com/hollyschinsky/pwa-workshop) by either downloading the zip or cloning it into to your **pgday** folder with `git`. You can use this project for reference throughout the workshop, or use it to follow along as we go through each lesson.

2. Next, from the command line (and within the **pgday** folder), create a new app project with the CLI using an existing GitHub repo as the template (**starter-app** is the path, **com.phonegap.todos** is the fully qualified package name and **StarterTodos** is the app name that will be shown on the device. Modify these as you wish):

        phonegap create starter-app com.phonegap.todos StarterTodos --template https://github.com/hollyschinsky/pwa-workshop-starter


        or with Cordova...

        phonegap create starter-app --id com.phonegap.todos --name StarterTodos --template https://github.com/hollyschinsky/pwa-workshop-starter


  >If you only have the Desktop app you can still use it to create a new project and just select the blank template. You will need to download or clone the [pwa-workshop-starter](https://github.com/hollyschinsky/pwa-workshop-starter) app first and then replace the `www` folder and `config.xml` in your newly project with those from the **pwa-workshop-starter** repo. 

3. You should now have a **pgday** folder with two new folders containing the starter project and the final project:

         ../pgday
         ../pgday/starter-app     
         ../pgday/pwa-workshop

**Add plugin dependencies**

## Run it!

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="index.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="lesson2.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
