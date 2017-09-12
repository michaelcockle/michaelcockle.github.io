import React from 'react'
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

//let _        = require('lodash');

let AxiosAjax = React.createClass({

    getInitialState: function () {
        return {
            jobs: []
        }
    },

    componentDidMount: function () {

        console.log('componentDidMount');

        let _this = this;

        this.serverRequest = axios.get("../data/job.json").then(function (result) {

            console.log('result.status = ', result.status);
            console.log('result.data = ', result.data);

            _this.setState({
                jobs: result.data.jobs
            });

        }).catch(function (error) {
            console.log(error);
        });
    },

    componentWillUnmount: function () {

        console.log('componentWillUnmount');
        //If Ajax request is still going when React (or you) removes component, the Ajax request will be aborted
        this.serverRequest.abort();
    },

    render: function () {

        let iterateOverJobs = this.state.jobs.map(function (job, value) {
            return (
                <div key={value} className="job">
                    <a href={job.url}>
                        {value} &nbsp; &nbsp;{job.company_name} &nbsp; &nbsp;{job.term} &nbsp; &nbsp;{job.title} &nbsp; &nbsp;
                        <img src={job.img} alt=""/> </a>
                    <p>{job.description}</p>
                </div>
            );
        });

        return (
            <div>
                <h1>Jobs!</h1>{iterateOverJobs}
            </div>
        )
    }

});

let MyCopy = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Map Filter Reduce</h1>
            </div>
        );
    }
});

let MapFilterReduce = React.createClass({

    render: function () {
        return (
            <div>

                <MyCopy/>

                <AxiosAjax/>
            </div>
        )
    }
});

export default MapFilterReduce








