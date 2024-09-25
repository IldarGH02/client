import { observer } from "mobx-react-lite"
import { NavigationItem } from "./NavigationItem/NavigationItem"
import { useContext } from "react"
import { Context } from "../.."

import { FaTasks } from "react-icons/fa";
import "./Navigation.scss"

export const Navigation = observer(() => {
    const { countStore } = useContext(Context)

    return (
        <ul className="home__navigation">
            <NavigationItem
                title="Все"
                path="/all"
                image={<FaTasks/>}
                count={countStore.all_count}
            />
            <NavigationItem
                title="Входящие"
                path="/in"
                image={<FaTasks/>}
                count={countStore.all_count}
            />
            <NavigationItem
                title="Сегодня"
                path="/today"
                image={<FaTasks/>}
                count={countStore.all_count}
            />
            <NavigationItem
                title="Завтра"
                path="/tomorrow"
                image={<FaTasks/>}
                count={countStore.all_count}
            />
            <NavigationItem
                title="Следующие 7 дней"
                path="/next"
                image={<FaTasks/>}
                count={countStore.all_count}
            />
            <NavigationItem
                title="Выполненные"
                path="/done"
                image={<FaTasks/>}
                className="done"
                count={countStore.all_count}
            />
        </ul>
    )
})