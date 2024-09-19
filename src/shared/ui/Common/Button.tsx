import { FC, MouseEventHandler } from "react"

interface IButton {
    onClick: MouseEventHandler<HTMLButtonElement>
    text: string
    additional_class: string
}

export const Button: FC<IButton> = ({
    onClick,
    text,
    additional_class
}) => {
    return (
        <button
            onClick={onClick}
            className={`button custom-button ${additional_class ? additional_class : ''}`}
        >
            {text}
        </button>
    )
}