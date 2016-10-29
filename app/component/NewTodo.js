/**
 * Created by comyn on 16-10-29.
 */
import React from 'react';

export default class NewTodo extends React.Component {
    static propTypes = {
        onCreate: React.PropTypes.func.isRequired
    };
    
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleCreate = this.handleCreate.bind(this);
    }
    
    handleCreate() {
        this.props.onCreate(this.state.value);
        this.setState({value: ''})
    }
    
    render() {
        return (
            <div>
                <form className="pure-form">
                    <fieldset>
                        <legend>新增代办事项</legend>
                        <input type="text" value={this.state.value} onChange={e => this.setState({value: e.target.value})}/>
                        <button type="button" className="pure-button pure-button-primary" onClick={this.handleCreate}>增加</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}