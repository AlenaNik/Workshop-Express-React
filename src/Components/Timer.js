import React, {Component} from 'react';

class Timer extends Component {
    state = {
        time: new Date()
    };

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    render() {
        return (
            <div className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div className="tc">
                <h1 className="f4">Counting time!</h1>
                    <h2 className="f6 black-70">It is {this.state.time.toLocaleTimeString()}</h2>
                </div>
            </div>
        );
    }
}
export default Timer;