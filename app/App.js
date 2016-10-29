/**
 * Created by comyn on 16-10-29.
 */
import React from 'react';
import connect from 'react-redux/lib/components/connect';
import NewTodo from './component/NewTodo';
import List from './component/List';
import Footer from './component/Footer';
import * as Actions from './actions';

@connect(state => ({todoApp: state.todoApp}),
    {
        add: Actions.add, done: Actions.done,
        reopen: Actions.reopen, filter: Actions.filter,
        list: Actions.list
    })
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
        this.handleReopen = this.handleReopen.bind(this);
        this.handleChangeFilter = this.handleChangeFilter.bind(this);
        this.props.list(this.props.todoApp.filter);
    }
    
    handleCreate(value) {
       //this.props.dispatch(Actions.add(value));
        this.props.add(value);
    }

    handleComplete(id) {
        //this.props.dispatch(Actions.done(id));
        this.props.done(id);
    }

    handleReopen(id) {
        //this.props.dispatch(Actions.reopen(id))
        this.props.reopen(id);
    }

    handleChangeFilter(filter) {
        //this.props.dispatch(Actions.filter(filter));
        this.props.filter(filter);
    }

    componentWillReceiveProps(props) {
        if (props.todoApp.needFetch) {
            this.props.list(props.todoApp.filter);
        }
        this.props = props;
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
