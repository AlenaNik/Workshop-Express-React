import React from 'react';
import axios from 'axios';

class api extends React.Component {
    state = {
        classmate: []
    }
    componentDidMount() {
        axios.get(`http://localhost:400/api/classmate`)
            .then(res => {
                const classmate = res.data;
                this.setState({classmate});
            })
    }

    render() {
        return (
            <ul>
                {this.state.classmate.map(target => <li>{target.name}</li>)}
            </ul>
        )
    }
}

export default api;