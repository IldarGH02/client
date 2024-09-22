import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Context } from "../..";

import "./ProfilePreview.scss";
import image from "../../shared/assets/image/708382_people_512x512.png"

export const ProfilePreview = observer(() => {
    const [img, setImg] = useState<string>('')

    const { userStore } = useContext(Context)
    const avatar = userStore.user?.photo_url

    if(avatar){
        setImg(avatar)
    } else {
        setImg(image)
    }

    return (
        <div className="profile__preview">
            <div className="profile__avatar">
                <img src={avatar}/>
            </div>
            <div className="profile__info">
                <h3 className="profile__info-text">
                    {/* {userStore.user?.first_name} */}
                    101lab
                </h3>
            </div>
        </div>
    )
})