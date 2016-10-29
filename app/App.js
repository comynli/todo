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
        this.getTodos();
    }

    getTodos(filter = null) {
        filter = filter ? filter : this.state.filter;
        fetch(`/api/todo/${filter}`)
            .then(resp => resp.json())
            .then(json => {
                if (json.code === 200) {
                    this.setState({todos: json.todos})
                }
            });
    }

    handleCreate(value) {
        fetch('/api/todo',
            {method: 'POST', body: JSON.stringify({content: value})})
            .then(resp => resp.json())
            .then(json => {
                if (json.code === 200) {
                    this.getTodos()
                }
            }).catch(err => console.log(err))
    }

    handleComplete(id) {
        fetch(`/api/todo/${id}/done`, {method: 'PUT'}).then(() => this.getTodos())
    }

    handleReopen(id) {
        fetch(`/api/todo/${id}/reopen`, {method: 'PUT'}).then(() => this.getTodos())
    }

    handleChangeFilter(filter) {
        if (filter === 'todo' || filter === 'all') {
            this.setState({filter: filter});
        }
        this.getTodos(filter);
    }

    render() {
        let todos = this.state.todos;
        if (this.state.filter === 'todo') {
            todos = this.state.todos.filter(it => !it.done)
        }
        return (
            <div style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
                <NewTodo onCreate={this.handleCreate}/>
                <List todos={todos}
                      onComplete={this.handleComplete}
                      onReopen={this.handleReopen}/>
                <Footer filter={this.state.filter} onChangeFilter={this.handleChangeFilter}/>
            </div>
        )
    }
}
