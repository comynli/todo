/**
 * Created by comyn on 16-10-29.
 */
import React from 'react';

export default class Footer extends React.Component {
    static propTypes = {
        filter: React.PropTypes.string.isRequired,
        onChangeFilter: React.PropTypes.func.isRequired
    };
    
    constructor(props) {
        super(props);
    }
    
    render() {
        if (this.props.filter === 'todo') {
            return (
                <div>
                    <a href="#" onClick={() => this.props.onChangeFilter('all')}>show all</a>
                </div>
            )
        }
        return (
            <div>
                <a href="#" onClick={() => this.props.onChangeFilter('todo')}>show todo</a>
            </div>
        )
    }
}