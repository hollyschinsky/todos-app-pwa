---
layout: module
title: Lesson 6&#58; Lighthouse Debugging
---

## Overview
Lighthouse is an open-source, automated tool for helping you to imrpove the performance, quality, and correctness of your web apps.

When auditing a page, Lighthouse runs a barrage of tests against the page, and then generates a report on how well the page did. From here you can use the failing tests as indicators on what you can do to improve your app.

## Demo


## Exercise
1. Install the [Lighthouse Chrome Extension]((https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en))

2. Run the report on your site

3. Before the closing `<\body> tag, add the following snippet to provide a more useful message indicating the situation when your pages can't load. 

        <noscript>
            <p>Uh oh, JavaScript must be disabled and your content didn't load.</p>
        </noscript>

## Resources
- [Lighthouse Chrome Extension](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en)
- [Quickstart Guide] http://bit.ly/lighthouse-quickstart

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="lesson5.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="lesson7.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
