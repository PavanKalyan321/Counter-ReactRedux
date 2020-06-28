import React, { Component } from 'react';

class SuccessPage extends Component {
    componentDidMount() {
        console.log('in successpage')
        setTimeout(this.myfunction, 5000)
    }
    myfunction = () => {
        console.log('in myfn')
        this.props.history.push('/users')
    }
    render() {
        return (
            <div>
                <h2>Success</h2>
                <h5>you will be redirected in 5 seconds</h5>
            </div>
        );
    }
}

export default SuccessPage;