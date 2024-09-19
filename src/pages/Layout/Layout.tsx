import { observer } from "mobx-react-lite"
import { Outlet } from "react-router-dom"

export const Layout = observer(() => {
    return <Outlet/>
})