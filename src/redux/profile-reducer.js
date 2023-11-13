const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'hi,how are you?', likesCount: 12},
        {id: 2, message: 'Suiiii', likesCount: 22},
        {id: 3, message: 'Ez for me', likesCount: 43},
    ],
    newPostText: '',
    profile:null,
}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = '';
            return stateCopy
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy
        }
        case SET_USERS_PROFILE:{
            return {...state,profile:action.profile}
        }
        default:
            return state
    }
}


export const addPostActionCreator = () => {

    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}
export const setUserProfile = (profile) => {
    return{
        type: SET_USERS_PROFILE, profile
    }
}

export default profileReducer;