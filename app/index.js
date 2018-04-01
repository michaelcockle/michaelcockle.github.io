import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {BrowserRouter as Router, Route, Link, Switch, Match} from 'react-router-dom';
import axios from 'axios'

import {fetchPosts, getData} from './components/cntful';

fetchPosts();

const url =
          'https://cdn.contentful.com/spaces/xq9fh8s1o76v/entries?access_token=f2b7ef5e7ac493e6714f70081a4d02ce892238ef8546d9e2704247e631f338ee';

//
//const staticUrl = axios
//.get('../data/contentful.json')
//.then(response => {
//
//})
//.catch(function(error) {
//    console.log(error)
//})


fetchPosts(url).then(
    function (response) {
        let data = JSON.parse(response);

        console.clear();
        console.log(data);

        //let dataJson = JSON.stringify(data)
        //console.log(dataJson);

        //let dataArray = Array.from(data.items)
        //console.log(dataArray);
        //


        let dataItems = data.items;

        //console.log('-------');
        //console.table(dataItems);
        console.log(dataItems);
        //console.log('Is DataItems an Array = ', Array.isArray(dataItems)); // true

        for (var prop of dataItems) {
            //console.log('typeof prop = ', typeof prop);
            //console.log('Is prop an Array = ', Array.isArray(prop)); // false

            console.log('prop = ', prop);

            console.log(Object.entries(prop));

            for (const item in prop) {

                const value = prop[item];

                //console.log('Item **** = ', item);
                //console.log('ITEM = ', item, ' : value = ', value);
                //console.log('Value **** = ', value);

                console.log('%c prop.sys.contentType = ', 'color: yellow;', prop.sys.contentType);
                //console.log('%c prop.sys.contentType = ', 'color: yellow;', prop.sys.contentType.sys.id);
                console.log('______________-');
                console.log('%c prop.id = ', 'color: green;', prop.sys.id);
                console.log('%c prop.createAt= ', 'color: purple;', prop.sys.createdAt);
                console.log('%c prop.updatedAt = ', 'color: purple;', prop.sys.updatedAt);

                if (prop.fields.name !== undefined) {
                    console.log('%c prop.fields.name = ', 'color: hotpink; font-size: 14px;', prop.fields.name);
                }
                if (prop.fields.description !== undefined) {
                    console.log('%c prop.fields.description = ', 'color: brown; font-size: 14px;', prop.fields.description);
                }
                if (prop.fields.title !== undefined) {
                    console.log('%c prop.fields.title = ', 'color: hotpink; font-size: 14px;', prop.fields.title);
                }

                if (prop.fields.biography !== undefined) {
                    console.log('%c prop.biography = ', 'color: blue; font-size: 14px;', prop.fields.biography);
                }

                if (prop.fields.tags !== undefined) {
                    console.log('%c prop.biography = ', 'color: yellow; font-size: 14px;', prop.fields.tags);
                }

                //console.log('Value = ', value);
                //console.log('value.name = ', value[0]);

            }

            // ["0"].fields

            //console.log('Arra y = ', Array.isArray(prop));

            //for (var propInner of prop) {
            //    console.log(propInner);
            //}

            //const code = 'website';
            //let post = prop.find(post => post.code === code);
            //console.log(post);
        }

        /*
        * */

        //console.log(data.includes.Asset['0'].fields);
        //console.log('BLOG = ', data.items['0'].fields.shortDescription);
        console.log(data.items[2].sys.contentType.sys.id);

        //const code = 'VBgtGQcSf';
        //const post = posts.find(post => post.code === code);

        //const postIndex = posts.findIndex(post => post.code === code);
        //console.log(postIndex);

        dataItems.map((item, i) => {

            //console.log(i);

            //console.log(item);

            //console.table(item.sys);
            //console.table(item.fields);

            //let fields = item.fields;

            //item.map(fields => {
            //    console.log(fields);
            //})

        });

        data.items.forEach(function (item) {
            //console.log('item == ', item);
            let elem = item.fields.shortDescription;

            //console.log('ELEM = ', elem);
            //.fields.title
            //item.fields.forEach(function (elem) {
            //    console.log('elem = ', elem);
            //})
        });

    },
    function (error) {
        console.error('Failed!', error);
    },
);

//const renderApp = () => {
//    render( <Router><App/></Router>, document.getElementById('app'))
//}
//
//renderApp()
//
//if (module.hot) {
//    module.hot.accept('./components/App', () => {
//        renderApp();
//    });
//}

if (module.hot) {
    module.hot.accept();
    console.log("index.js HMR");
    const NewApp = require('./components/App').default;
    render(<Router><App/></Router>, document.getElementById('app'));
}

// if (module.hot) module.hot.accept()
/* <pre className="app--data">{JSON.stringify(this.state.data, null, 2)}</pre> */