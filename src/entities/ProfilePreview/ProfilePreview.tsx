import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { Context } from "../.."

export const ProfilePreview = observer(() => {
   const { userStore } = useContext(Context)
   const avatar = userStore.user?.photo_url

    return (
        <div className="profile__preview">
            <div className="profile__avatar">
                <img src={avatar}/>
            </div>
            <div className="profile__info">
                <h3 className="profile__info-text">
                    {userStore.user?.first_name}
                </h3>
            </div>
        </div>
    )
})