import { ChangeEventHandler, FC, MouseEventHandler } from "react"

interface IInput {
    onChange: ChangeEventHandler<HTMLInputElement>
    onClick?: MouseEventHandler<HTMLInputElement>
    value: string
    additional_class: string
    placeholder: string
}

export const Input: FC<IInput> = ({
    onChange,
    value,
    additional_class,
    placeholder,
    onClick,
}) => {
    return (
        <input
            onChange={onChange}
            onClick={onClick}
            value={value}
            className={`input custom_input ${additional_class ? additional_class : ''}`}
            placeholder={placeholder}
        />
    )
}