import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';

class Home extends Component {
    state = {
        posts: []
    }
    render() {
        return (
            <div>
                <h2>HOME</h2>
                <Button variant="contained" color="primary" onClick={()=>this.props.dispatch({type:'INC'})}>
                    INC
                </Button> <br/>
                <Button variant="contained" color="primary" onClick={()=>this.props.dispatch({type:'DEC'})}>
                    DEC
                </Button><br/><br/>
                <h2>{this.props.state!==undefined?this.props.state.count:''}</h2>
            </div>
        );
    }
}
const mapStateToProps = (stateReducer) => {
    return {
        state: stateReducer
    }
}
export default connect(mapStateToProps)(Home);