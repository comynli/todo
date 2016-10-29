/**
 * Created by comyn on 16-10-29.
 */
import React from 'react';
import Item from './Item';

export default class List extends React.Component {
    static propTypes = {
        todos: React.PropTypes.array.isRequired,
        onComplete: React.PropTypes.func.isRequired,
        onReopen: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                {
                    this.props.todos
                        .map(it => (
                            <Item key={it.id} todo={it}
                                  onReopen={this.props.onReopen}
                                  onComplete={this.props.onComplete} />
                        ))
                }
            </div>
        )
    }
}