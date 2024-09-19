import { observer } from "mobx-react-lite"
import { useEffect } from "react"

export const ProfilePreview = observer(() => {
    const user = window.Telegram.WebApp.initDataUnsafe.user

    useEffect(() => {
        console.log(window.Telegram.WebApp.initDataUnsafe)
    }, [])

    return (
        <div className="profile__preview">
            <div className="profile__avatar">
                <img src={user && user.photo_url}/>
            </div>
            <div className="profile__info">
                <h3 className="profile__info-text">
                    {user && user.first_name}
                </h3>
            </div>
        </div>
    )
})