# Angular API Test

Programming test that involved accessing an API from an Angular app.

## Instructions

>Use the feed at http://www.stellarbiotechnologies.com/media/press-releases/json to display a lazy load the list of headlines and their publish date. Both limit and offset are available as URL parameters.

## Solution
* [Plunker](http://plnkr.co/edit/fLiEyT2JMbfObKhhFxn6?p=preview)

My initial solution doesn't have controls for changing `limit` and `offset`; I tried adding those but experienced some issues with the `infinite-scroll` module. I decided to start `offset` out with value 0 and keep the `limit` value equal to 20.
