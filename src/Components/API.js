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
                    <li>{person.name}</li>
                ))}
            </>
        );
    }
}

export default api;