import * as React from 'react';
export default class Test extends React.Component {
    state = {
        numbers: []
    }
    componentDidMount() {
        let num = []
        for (let i = 0; i < 50; i++) {
            num.push(i)
        }
        console.log(num);
        this.setState({
            numbers: num
        })
        
    }


    render() {
        return (
            <div>
                <h2>Test</h2>

                {this.state.numbers.length > 0 ? this.state.numbers.map((element, index) => {
                    return (
                        <div key={index}>
                            <h2>{element}</h2>
                        </div>
                    )
                }) : ''}
            </div>
        )
    }
}

