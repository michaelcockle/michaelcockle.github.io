webpackJsonpMichaelCockle([2],{161:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return e.replace(/^https?:\/\//i,"").replace(/\/$/,"")}Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),i=n.n(c),s=n(52),p=(n(53),function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return o(t,e),t.prototype.componentDidMount=function(){console.log("Details: Component Did Mount")},t.prototype.render=function(){var e=this.props.show,t=e.title,n=e.description,r=e.year,a=e.poster,o=(e.trailer,e.url),c=e.info,p=l(o);return console.log(p),i.a.createElement("div",{className:"route__item-wrapper"},i.a.createElement(s.a,{showSearch:"back"}),i.a.createElement("section",{className:"show-card__details"},i.a.createElement("div",{className:"show-card__details-img"},i.a.createElement("img",{src:"/assets/img/posters/"+a,alt:"project is "+t+" "})),i.a.createElement("div",{className:"show-card__details-info"},i.a.createElement("h1",null,t),i.a.createElement("h2",null,"(",r,")"),i.a.createElement("h3",null,"Description"),i.a.createElement("p",null,n),i.a.createElement("h3",null,"Description"),i.a.createElement("p",null,c),i.a.createElement("p",null,i.a.createElement("a",{target:"_blank",href:o},p)))))},t}(c.Component));t.default=p}});