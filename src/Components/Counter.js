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
        return <button
            className="f6 link dim ph3 pv2 mb2 dib white bg-hot-pink"
            onClick={this.handleClick}>Sorry, I'm not in the center. Click me: {this.state.count}</button>;
    }
}

export default Counter;