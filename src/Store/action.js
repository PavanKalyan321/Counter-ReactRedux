import axios from 'axios'
export const add = (posts) => {
    return { type: "ADD_POSTS", payload: posts };
}
export const addPosts = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((result) => {
            console.log(result)
            dispatch(add(result.data))
        }).catch((err) => {
            console.log(err)
        })
    }
}
export const addOnePost = (posts) => {
    return { type: "ADD_POSTS", payload: posts };
}
export const getPost = (id) => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then((result) => {
            console.log(result)
            dispatch(addOnePost(result.data))
        }).catch((err) => {
            console.log(err)
        })
    }
}
