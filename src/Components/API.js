import React from "react";
import axios from "axios";

class api extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:[]
        };
    }
    componentDidMount() {
        axios.get("http://localhost:400/api/classmate").then(res => {
            this.setState({
                id: res.data
            });
        });
    }

    render() {
        return (
            <>
                {this.state.id.map(person => (
                    <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
                    <li className="ph3 pv3 bb b--light-silver">{person.name}</li>
                    </ul>
                ))}
            </>
        );
    }
}

export default api;