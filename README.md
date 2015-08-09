# sample_api_app
sample angular app that utilizes an API

##Motivation
I recently came across this programming problem as part of an applicant screening process.

##Problem Statement
>Use the feed at http://www.stellarbiotechnologies.com/media/press-releases/json to display a lazy load the list of headlines and their publish date. Both limit and offset are available as URL parameters.

##Solution
* [Solution in action](http://run.plnkr.co/plunks/fLiEyT2JMbfObKhhFxn6/)
* [Solution as Plunker](http://plnkr.co/edit/fLiEyT2JMbfObKhhFxn6?p=info)

My initial solution doesn't have controls for changing `limit` and `offset`; I tried adding those but experienced some issues with the `infinite-scroll` module. I decided to start `offset` out with value 0 and keep the `limit` value equal to 20.
