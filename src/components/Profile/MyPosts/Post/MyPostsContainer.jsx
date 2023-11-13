import React, {createRef} from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost : () => {
            dispatch(addPostActionCreator());
        }
    }
}
let mapStateToProps = (state) => {
    return {
        posts : state.profilePage.posts,
        newPostText : state.profilePage.newPostText
    }
}

const myPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default myPostsContainer;