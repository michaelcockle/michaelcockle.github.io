import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {BrowserRouter as Router, Route, Link, Switch, Match} from 'react-router-dom';

import {fetchPosts, getData} from './components/cntful';

fetchPosts();


const url =
          'https://cdn.contentful.com/spaces/xq9fh8s1o76v/entries?access_token=f2b7ef5e7ac493e6714f70081a4d02ce892238ef8546d9e2704247e631f338ee';

fetchPosts(url).then(
    function (response) {
        let data = JSON.parse(response);

        //console.clear();

        console.log(data);

        let dataItems = data.items;

        console.log('-------');
        //console.table(dataItems);
        console.log(dataItems);
        console.log(typeof dataItems);
        //console.log('Array = ' , Array.isArray(dataItems));
        console.log('-------');

        for (var prop of dataItems) {
            //console.log('prop = ', prop);

            for (const item in prop) {
                const value = prop[item];
                //console.log('Item **** = ', item);
                //console.log('ITEM = ', item, ' : value = ', value);
                console.log('---***----');
            }

            // how get index ?


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


if(module.hot) {
    module.hot.accept();
    console.log("index.js HMR");
    const NewApp = require('./components/App').default;
    render(<Router><App/></Router>, document.getElementById('app'));
}





// if (module.hot) module.hot.accept()
/* <pre className="app--data">{JSON.stringify(this.state.data, null, 2)}</pre> */