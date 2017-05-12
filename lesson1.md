---
layout: module
title: Lesson 1&#58; Project Setup
---

## Overview

## Demo

>Notes about this and that

## Exercise

1. Create a folder called `MyPlugin` and `cd` into it

        $ mkdir MyPlugin
        $ cd MyPlugin/

2. Create a file called `plugin.xml` 

        $ touch plugin.xml

3. Open `plugin.xml` and enter the following:

        <?xml version="1.0" encoding="UTF-8"?>
        <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
            xmlns:android="http://schemas.android.com/apk/res/android"
            id="org-me-myplugin"
            version="0.0.1">
            <name>myplugin</name>
        </plugin>

4. Create a basic Cordova project if you don't have one already

        $ cordova create ../MyApp

5. `cd` into the new app project

        $ cd ../MyApp/

2. Add your plugin 

        $ cordova plugin add ../MyPlugin

3. List the plugins to ensure it's been added

        $ cordova plugin list

   >Successful addition of a plugin means it's a valid plugin. 

4. **You must remove the plugin before moving on to the next step**

        $ cordova plugin remove org-me-myplugin

**Add plugin dependencies**

1. Now go back into your plugin and edit the `plugin.xml` to add the following dependencies

        <dependency id="cordova-plugin-device"/>
        <dependency id="cordova-plugin-console"/>

2. `cd` into your app project and **add your plugin again**

        $ cordova plugin add ../MyPlugin

3. If no platforms were installed, you will need to add your platform to see them installed


<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="index.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="lesson2.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
