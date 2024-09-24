import { ProfilePreview } from "../../entities/ProfilePreview/ProfilePreview"
import {} from '@mui/material'
import "./ProfileBlock.scss"

export const ProfileBlock = () => {
    return (
        <div className="home__profile-block">
            <ProfilePreview/>
        </div>
    )
}