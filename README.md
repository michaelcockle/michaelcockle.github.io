
Performance
===========

?react_perf

Load your app with ?react_perf in the query string (for example, http://localhost:3000/?react_perf).

Universal Rendering
===================

Improve percieved load time

Universal rendering, formerly known as isomorphic rendering.
server-side prerender your code so that when it gets down to the client, your browser can instantly show the markup while your app bootstraps in the background. 

Time to interactive

NODE   




https://davidwalsh.name/upgrade-nodejs
test
Global Node Modules
ls -al /usr/local/lib/node_modules/

Update NPM
----------

sudo npm cache clean -f
sudo npm install -g n
sudo n stable

sudo npm update npm -g

List NPM packages
-----------------

npm list --depth=0
npm list -g --depth=0

List outdated packages
----------------------

npm outdated

Update packages and save to package.json
----------------------------------------

To update global packages, you can use npm update -g <package>:

npm update -g jshint
To find out which packages need to be updated, you can use npm outdated -g --depth=0.

To update all global packages, you can use npm update -g.

npm update --save-dev || npm update -D

npm-check-updates 
-----------------

https://www.npmjs.com/package/npm-check-updates

Show any new dependencies for the project in the current directory:
run > ncu

Upgrade a project's package file:
ncu -u

Start React server
------------------

npm run start

http://localhost:8080/
http://localhost:8080/webpack-dev-server/

For pre webpack 2 - add paths to webpack.config.js (alias)


From Terminal
-------------

run webpack -p for production
webpack-dev-server --inline (auto re loads pagee)
webpack --config webpack-production.config.js -p ()

Express server using server.js
run > node server.js

HMR
---

npm install react-hot-loader@next

Impossible to have all 3 working together. 
1: HMR
2: Server Side Rendering
3: Code Splitting

Prettier
--------

/usr/local/bin/prettier -> /usr/local/lib/node_modules/prettier/bin/prettier.js
+ prettier@1.7.0

Misc
----

//{<pre><code>{JSON.stringify(preload, null, 4)}</code></pre>}

