const initialState = {
    count:0,
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC":{
            return{
                count:state.count+1
            }
        }
        case "DEC":{
            return{
                count:state.count-1
            }
        }
        default: console.log('default case');
    }
}
export default rootReducer;