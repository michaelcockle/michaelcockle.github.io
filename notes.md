git subtree push --prefix dist origin gh-pages

http://localhost/user/michaelcockle.github.io/dist/




where to save components ?
how reuse ?
git ?

about - linkedin profile

metaflow.co.uk
D3, data visualisation

green socks
animation

goldsboroughcricketclub



https://www.bathstore.com/bathroom-ideas/bathroom-genie




Other Sites
===========

www.bradford-theatres.co.uk
www.polapplication.co.uk
www.tradegardenhealth.com
www.harrogatespring.com
www.apollomemory.com
www.askdirect.co.uk
www.britcom.co.uk
www.christophernixon.co.uk
www.eddisons.com
www.expressbifoldingdoors.co.uk
www.handyhousehold.co.uk
www.multiflight.com
www.naturesfeast.co.uk
www.peckishbirdfood.com
www.pelviva.com
www.postofficecommunityfund.co.uk
www.qwiddle.co.uk
www.hirefox.com
www.hireacamera.com
www.tmrec.com
www.yarnstories.com


 
http://health.marksandspencer.com/ (Mobile Site)




Progressive Web Apps
====================

Time to interactive on a 3g connection should be 5 seconds
Average react app = (11 secs) on a 3g connection

Service Workers
PRPL (Purple)

Fiber
----- 

Improves percieved performance and responsiveness for complex react apps.
Its a reconciliation algorithm
new event 'shouldComponentUpdate' ?




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
{
  "title": "Weavabel",
  "year": "2014",
  "description": "Xxxxx xxxx",
  "poster": "hitec.jpg",
  "myRole": "Front End Build",
  "url": "#",
  "projectID": "weavabel",
  "info": "Front End build and maintenance"
},    
{
  "title": "M & S",
  "year": "2003",
  "description": "A single cohesive brand proposition",
  "poster": "marks-and-spencers.jpg",
  "myRole": "Front End Build",
  "url": "#",
  "projectID": "marks-and-spencers",
  "metadata": "mobile"
},
{
  "title": "Rural Insurance Kiosk",
  "year": "2015",
  "description": "xxxxx xxxxx",
  "poster": "bathstore.jpg",
  "myRole": "Front End Build",
  "url": "#",
  "projectID": "rural-insurance-kiosk",
  "metadata": "brochure kiosk",
  "info": "Front End build"
},
{
  "title": "Childrens Hydration",
  "year": "2016",
  "description": "Animation SVG",
  "poster": "bathstore.jpg",
  "myRole": "Front End Build",
  "url": "#",
  "projectID": "hydration",
  "metadata": "brochure SVG",
  "info": "Front End build and maintenance"
}