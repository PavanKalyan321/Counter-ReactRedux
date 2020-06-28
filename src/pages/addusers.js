import * as React from 'react';
import { connect } from 'react-redux';
export default class AddUsers extends React.Component{
    state={

    }
    componentDidMount(){

    }
    render(){
        return(
            <div>
                
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        state:state
    }
}
export default (mapStateToProps)(AddUsers);