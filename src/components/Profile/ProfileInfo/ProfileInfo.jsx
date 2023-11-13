import React from 'react'
import c from './ProfileInfo.module.css'
import Preloader from "../../../common/preloader/Preloader";


const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader/>

    }

    return (
        <div >
            <div >
                <img className={c.img} src="https://pic.rutubelist.ru/video/eb/f8/ebf8d86ddd388ef643c195927b2be660.jpg" alt=""/>
            </div>
            <div className={c.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                ava+description
            </div>
            <div>
                <p>{props.profile.aboutMe}</p>
            </div>
        </div>
    );
}

export default ProfileInfo;
