import React, { Component } from 'react';

class Header extends Component {
    render() {
        const style = {
            backgroundColor: '#282c34',
            top: 0,
            width: '100%',
            color: 'white',
            height: '60px',
            alignItems: 'center'
        }
        return (
            <div style={style}>
                <h4>.</h4>
            </div>
        );
    }
}

export default Header;