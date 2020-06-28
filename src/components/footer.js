import React, { Component } from 'react';

class Footer extends Component {
    render() {
        const style = {
            height: '60px',
            width: '100%',
            backgroundColor: '#282c34',
            bottom: 0,
            alignItems: 'bottom',
            left: 0,
            color: 'white',
            position: 'fixed'
        }
        return (
            <div style={style}>
                <h4>PAVAN</h4>
            </div>
        );
    }
}

export default Footer;