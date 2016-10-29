/**
 * Created by comyn on 16-10-29.
 */
import React from 'react';
import NewTodo from './component/NewTodo';
import List from './component/List';
import Footer from './component/Footer';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todos: [], filter: 'todo', current: 0};
        this.handleCreate = this.handleCreate.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
        this.handleReopen = this.handleReopen.bind(this);
        this.handleChangeFilter = this.handleChangeFilter.bind(this);
    }

    handleCreate(value) {
        const todo = {content: value, done: false, id: this.state.current += 1};
        const todos = this.state.todos;
        todos.push(todo);
        this.setState({todos: todos, current: todo.id});
    }

    handleComplete(id) {
        const todos = this.state.todos;
        todos.find(it => it.id === id).done = true;
        this.setState({todos: todos});
    }

    handleReopen(id) {
        const todos = this.state.todos;
        todos.find(it => it.id === id).done = false;
        this.setState({todos: todos});
    }

    handleChangeFilter(filter) {
        if (filter === 'todo' || filter === 'all') {
            this.setState({filter: filter});
        }
    }

    render() {
        let todos = this.state.todos;
        if (this.state.filter === 'todo') {
            todos = this.state.todos.filter(it => !it.done)
        }
        return (
            <div>
                <NewTodo onCreate={this.handleCreate}/>
                <List todos={todos}
                      onComplete={this.handleComplete}
                      onReopen={this.handleReopen}/>
                <Footer filter={this.state.filter} onChangeFilter={this.handleChangeFilter}/>
            </div>
        )
    }
}
