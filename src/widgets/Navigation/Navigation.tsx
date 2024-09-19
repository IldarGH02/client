import { NavigationItem } from "../../entities/NavigationItem/NavigationItem"

export const Navigation = () => {
    return (
        <div className="home__navigation">
            <NavigationItem
                title="Все"
                path="/all"
                image=""
                count=""
            />
            <NavigationItem
                title="Входящие"
                path="/in"
                image=""
                count=""
            />
            <NavigationItem
                title="Сегодня"
                path="/today"
                image=""
                count=""
            />
            <NavigationItem
                title="Завтра"
                path="/tomorrow"
                image=""
                count=""
            />
            <NavigationItem
                title="Следующие 7 дней"
                path="/next"
                image=""
                count=""
            />
            <NavigationItem
                title="Выполненные"
                path="/done"
                image=""
                count=""
            />
        </div>
    )
}