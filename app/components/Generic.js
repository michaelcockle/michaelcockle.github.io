import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import TaskList from './generic/TaskList'
import styled from 'styled-components'

const Wrapper = styled.section`
    //width: 100%;
    margin-top: 1rem;
    background: #5e5e5e;
    padding: 1rem;
`



class Generic extends React.Component {
    constructor(props) {
        super(props)

        // old way was getInitialState
        this.state = {
            count: 0,
            items: ['go to store', 'buy a car', 'blah', 'sdfsdfsfd', 'sdfsdf'],
        }
    }

    add = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }

    subtract = () => {
        this.setState({
            count: this.state.count - 1,
        })
    }

    render() {
        return (
            <div className="route__item-wrapper">
                <h1>Generic*</h1>
                <Wrapper>
                    <TaskList items={this.state.items} />{' '}
                </Wrapper>{' '}
                {/*<TaskList />*/}
                <h4> h4: {this.props.match.path}</h4>
                <div>Counter:{this.state.count}</div>
                <button onClick={this.add}>Add</button>
                <button onClick={this.subtract}>Remove</button>
            </div>
        )
    }
}

export default Generic
