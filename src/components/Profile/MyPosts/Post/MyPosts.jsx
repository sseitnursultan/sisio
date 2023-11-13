import React, {createRef} from 'react'
import c from './MyPosts.module.css'
import Posts from "../Posts";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Posts message={p.message} count={p.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }
    return (
        <div className={c.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} name="" id="" cols="30" rows="10"
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>add post</button>
                </div>

            </div>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;