Notes
-----

Progressive web apps
Time to interactive on a 3g connection should be 5 seconds
Average react app = (11 secs) on a 3g connection

Service Workers
PRPL
Fiber ? 
Server side rendering
---------------------


rendering to string is memory intensive (can take server down especially if you dont cache your components), server should just be rendering assets and lazy loading components. 

Instead we can render a stream from node, take the app and rather than rendering it one time and putting the entire string in memory and then sending it down to the browser, reactDOM from r16 allows us to render that into a stream, and pass that stream as the rendering is happening. This is much more performant. 


'renderToStaticStream'

import {renderToStaticStream} from 'react-dom/server'
app.get('*',(req,res) => {
const context = {};
rederToStaticStream(
<Router context={context} location={req.url}>
<App />
</Router>
)
.pipe(res)
.on('end', () => res.end());
});

React (16)
Rather than render a string 





Application shell ?

Split code into chunks, ajax the rest
split code by route

<link rel="preload"> does not block the window load event - this means that users can access the site even while js is loading in the background getting ready to execute when they reach the next route. Webpack can also write this tag (recommended)

Caching
Service workers - users offline, gotcha = caching - dont change hashes on files that have not changed

libraries - sw-toolbox, sw-precache, offline-plugin

HTTPS

------

Book - FullstackReact
react, and redux,



ToDo
=====

Images (Responsive)
-------------------
Picture tag

Copy
----
Extend for - micro projects e.g. bathstore...


Design

CSS grid - fallbacks

 
Optimisation
------------

Lighthouse
code splitting (chunking) ajax
Server side rendering 
Preact (no synthetic events)

Animations 
----------

Serach
------

auto suggest

Fonts
-----

.ico

google analytics


    {
      "title": "Westland",
      "year": "2015",
      "description": "Serving stockists and consumers with a multi-faceted digital strategy",
      "poster": "westland.jpg",
      "url": "https://www.bathstore.com/",
      "projectID": "westland",
      "metadata": "CMS"
    },


