import React from 'react'
import styles from "./users.module.css";
import userPhoto from "../../assets/images/219983.png";
import {Link} from "react-router-dom";

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p).bind(this)
                                 }}>{p}</span>

                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <Link to={'/profile/'+u.id}>
                            <img className={styles.usersPhoto}
                                 src={u.photos.small != null ? u.photos.small : userPhoto}/>
                            </Link>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => {
                                    props.unFollow(u.id)
                                }}>unFollow</button> :
                                <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )


}

export default Users