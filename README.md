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
