import { observer } from "mobx-react-lite"
import { ChangeEventHandler, FC, FocusEventHandler, MouseEventHandler } from "react"

interface IInput {
    onChange: ChangeEventHandler<HTMLInputElement>
    onClick?: MouseEventHandler<HTMLInputElement>
    onFocus?: FocusEventHandler<HTMLInputElement>
    onBlur?: FocusEventHandler<HTMLInputElement>
    value: string
    additional_class: string
    placeholder: string
}

export const Input: FC<IInput> = observer(({
    onChange,
    value,
    additional_class,
    placeholder,
    onBlur,
    onClick,
    onFocus
}) => {
    return (
        <input
            onChange={onChange}
            onClick={onClick}
            onFocus={onFocus}
            onBlur={onBlur}
            value={value}
            className={`input custom_input ${additional_class ? additional_class : ''}`}
            placeholder={placeholder}
        />
    )
})