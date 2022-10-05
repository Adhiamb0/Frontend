import React, { Component } from "react";
import axios from "axios";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersCollection: []
        };
    }
    componentDidMount() {
        axios
        .get("http://localhost:8080/users")
        .then((res)=> {
            this.setState({usersCollection:res.data});
        })
        .catch((error) => {
            console.log(error);
        })
    };
    render() {
        return (
            <div>
                <h1>Users-Manager</h1>
            </div>
        );
    }
}

export default Users;