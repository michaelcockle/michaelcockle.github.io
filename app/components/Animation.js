import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { CSSTransitionGroup } from 'react-transition-group'
import Transition from 'react-transition-group/Transition'
import CSSTransition from 'react-transition-group/CSSTransition'
import TransitionGroup from 'react-transition-group/TransitionGroup'

function Card({ children, onRemove }) {
    return (
        <div className="card">
            {children}
            <button onClick={onRemove}>Remove</button>
        </div>
    )
}

function FadeTransition({ children, duration, in: inProp }) {
    const defaultStyle = {
        transition: `${duration}ms ease-in`,
        transitionProperty: 'opacity, transform',
    }

    const transitionStyles = {
        entering: {
            opacity: 0,
            transform: 'translateY(-10%)',
        },
        entered: {
            opacity: 1,
            transform: 'translateY(0)',
        },
        exiting: {
            opacity: 0,
            transform: 'translateY(-10%)',
        },
    }

    return (
        <Transition
            in={inProp}
            timeout={{
                enter: 0,
                exit: duration,
            }}
        >
            {state => {
                if (state === 'exited') {
                    return null
                }

                return React.cloneElement(children, {
                    style: Object.assign(
                        {},
                        defaultStyle,
                        transitionStyles[state],
                    ),
                })
            }}
        </Transition>
    )
}

function Board({ children }) {
    return <ul className="board">{children}</ul>
}

class ReactTransitionDemo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cards: [],
        }

        this.addCard = this.addCard.bind(this)
        this.removeCard = this.removeCard.bind(this)
        this.removeLastCard = this.removeLastCard.bind(this)
    }

    render() {
        const { cards } = this.state

        return (
            <main className="card-container">

                <button onClick={this.addCard}>Add a card</button>
                <button onClick={this.removeLastCard}>Remove a card</button>
                <TransitionGroup component={Board}>
                    {cards.map(card => {
                        return (
                            <FadeTransition duration={150} key={card.id}>
                                <li className="board__item">
                                    <Card
                                        onRemove={() => {
                                            this.removeCard(card.id)
                                        }}
                                    >
                                        {card.content}
                                    </Card>
                                </li>
                            </FadeTransition>
                        )
                    })}
                </TransitionGroup>
            </main>
        )
    }

    addCard() {
        const { cards } = this.state
        const id = cards.length + 1
        const newCard = {
            id,
            content: `Card ${id}`,
        }
        this.setState({
            cards: cards.concat([newCard]),
        })
    }

    removeCard(id) {
        const { cards } = this.state
        this.setState({
            cards: cards.filter(card => card.id !== id),
        })
    }

    removeLastCard() {
        const { cards } = this.state
        this.setState({
            cards: cards.slice(0, -1),
        })
    }
}

const Animation = () => {
    return (
        <div className="route__item-wrapper">
            <p>Animation</p>
            <ReactTransitionDemo />
        </div>
    )
}

export default Animation
