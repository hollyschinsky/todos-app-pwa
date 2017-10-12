---
layout: module
title: Lesson 7&#58; Lighthouse & Debugging
---

## Overview
Lighthouse is an open-source, automated tool for helping you to improve the performance, quality, and correctness of your web apps.

When auditing a page, Lighthouse runs a barrage of tests against the page, and then generates a report on how well the page did. From here you can use the failing tests as indicators on what you can do to improve your app.

## Exercise
1. Install the [Lighthouse Chrome Extension](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en)

   >Google announced that the Lighthouse tool will be included in an upcoming version of the browser by default. 

2. Run the report on your site, check out the score and areas where you lost points for tips.

3. Increase your score by adding the following snippet before the closing `<\body>` tag to provide a more useful message indicating the situation when your pages can't load, for instance when users have JavaScript turned off.

        <noscript>
            <p>Uh oh, JavaScript must be disabled and your content didn't load.</p>
        </noscript>

## Resources
- [Lighthouse Website](https://developers.google.com/web/tools/lighthouse/)
- [Debugging Progressive Web Apps](https://developers.google.com/web/tools/chrome-devtools/progressive-web-apps)
- [Debugging Service Workers](https://developers.google.com/web/fundamentals/getting-started/codelabs/debugging-service-workers/)
- [Progressive Web App Checklist](https://developers.google.com/web/progressive-web-apps/checklist)
- [Lighthouse Chrome Extension](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en)
- [Lighthouse Quickstart Guide](http://bit.ly/lighthouse-quickstart)
- [Vue CLI PWA Template](https://github.com/vuejs-templates/pwa)

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="lesson6.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="lesson8.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
