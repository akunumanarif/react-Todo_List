import React, { Component } from 'react'
import TodoItem from './TodoItems';
export default class TodoList extends Component {
    render() {
        return (
            <section>
                <h2>Thus is TodoList</h2>
                <TodoItem></TodoItem>
            </section>
        )
    }
}
