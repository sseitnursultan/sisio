import React from 'react'
import c from './Posts.module.css'

const Posts = (props) => {
    return (
                <div className={c.item}>
                    <img src="https://i.pinimg.com/736x/a0/1e/b9/a01eb920157d569f0c214bc48ef1dec4.jpg" alt=""/>
                    {props.message}
                    <div>
                         like {props.count}
                    </div>
                </div>
    );
}

export default Posts;


