import { FC } from "react"
import { Link } from 'react-router-dom'
import './NavigationItem.scss'

interface INavigationItem {
    image: string
    title: string
    count: string
    path: string
}

export const NavigationItem: FC<INavigationItem> = ({
    image,
    title,
    count,
    path
}) => {
    return (
        <Link to={path} className="navigation__item">
            <div className="item__icon">
                {image}
            </div>
            <h3 className="item__title">
                {title}
            </h3>
            <p className="item__count">
                {count}
            </p>
        </Link>
    )
}