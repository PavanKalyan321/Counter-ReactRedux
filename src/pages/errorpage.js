import React, { Component } from 'react';

class ErrorPage extends Component {
    componentDidMount() {
        console.log('in error')
        setTimeout(this.myfunction, 5000)
    }
    myfunction = () => {
        console.log('in myfn')
        this.props.history.push('/users')
    }
    render() {
        return (
            <div>
                <h2>Error</h2>
                <h5>you will be redirected in 5 seconds</h5>
            </div>
        );
    }
}

export default ErrorPage;