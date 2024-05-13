import React, {Component, useState} from 'react';
import {Alert} from "react-bootstrap";



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowAlert: true,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isShowAlert: false });
        }, 3000);
    }

    render() {
        const { isShowAlert } = this.state;

        return (
            <div>
                {isShowAlert && <Alert>Welcome to Our Competition World</Alert>}
            </div>
        );
    }
}

export default Home;