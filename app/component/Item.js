/**
 * Created by comyn on 16-10-29.
 */
import React from 'react';


export default class Item extends React.Component {
    static propTypes = {
        onComplete: React.PropTypes.func.isRequired,
        onReopen: React.PropTypes.func.isRequired,
        todo: React.PropTypes.object.isRequired
    };
    
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        if (e.target.checked) {
            this.props.onComplete(this.props.todo.id)
        } else {
            this.props.onReopen(this.props.todo.id)
        }
    }
    
    render() {
        return (
            <div className="pure-g">
                <div className="pure-u-1-24">
                    <input type="checkbox" defaultChecked={this.props.todo.done} onChange={this.handleChange}/>
                </div>
                <div className="pure-u-23-24">
                    <span style={{letterSpacing: 'normal', textAlign: 'left'}}>
                        {this.props.todo.content}
                    </span>
                </div>
            </div>
        )
    }
}