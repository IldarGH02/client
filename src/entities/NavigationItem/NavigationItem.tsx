import { FC, ReactNode } from "react"
import { Link } from 'react-router-dom'
import './NavigationItem.scss'

interface INavigationItem {
    image: ReactNode
    title: string
    count: string
    path: string
    className?: string
}

export const NavigationItem: FC<INavigationItem> = ({
    image,
    title,
    count,
    path,
    className
}) => {
    return (
       <li className="navigation__item">
            <Link to={path} className="navigation__item-link">
                <div className="navigation__item-icon">
                    {image}
                </div>
                <div className={`navigation__item-category ${className}`}>
                    <h3 className="item__title">
                        {title}
                    </h3>
                    <p className="item__count">
                        {count}
                    </p>
                </div>
            </Link>
       </li>
    )
}