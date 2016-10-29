/**
 * Created by comyn on 16-10-29.
 */
import React from 'react';
import connect from 'react-redux/lib/components/connect';
import NewTodo from './component/NewTodo';
import List from './component/List';
import Footer from './component/Footer';
import * as Actions from './actions';

@connect(state => ({todoApp: state.todoApp}))
export default class App extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {todos: [], filter: 'todo', current: 0};
        this.handleCreate = this.handleCreate.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
        this.handleReopen = this.handleReopen.bind(this);
        this.handleChangeFilter = this.handleChangeFilter.bind(this);
    }
    
    handleCreate(value) {
       this.props.dispatch(Actions.add(value));
    }

    handleComplete(id) {
        this.props.dispatch(Actions.done(id));
    }

    handleReopen(id) {
        this.props.dispatch(Actions.reopen(id))
    }

    handleChangeFilter(filter) {
        this.props.dispatch(Actions.filter(filter));
    }

    render() {
        let todos = this.props.todoApp.todos;
        if (this.props.todoApp.filter === 'todo') {
            todos = this.props.todoApp.todos.filter(it => !it.done)
        }
        return (
            <div style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
                <NewTodo onCreate={this.handleCreate}/>
                <List todos={todos}
                      onComplete={this.handleComplete}
                      onReopen={this.handleReopen}/>
                <Footer filter={this.props.todoApp.filter} onChangeFilter={this.handleChangeFilter}/>
            </div>
        )
    }
}
