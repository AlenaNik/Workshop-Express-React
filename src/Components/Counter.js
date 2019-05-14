import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0
    };
    handleClick = () => {
        this.setState(({ count }) => ({
            count: count + 1
        }));
    };
    render() {
        return (
            <div className="tc">
            <button
            className="f1 link dim br-pill ph3 pv2 mb2 dib white bg-hot-pink"
            onClick={this.handleClick}> Click me to start counting: {this.state.count}</button>
            </div>
        );
    }
}

export default Counter;