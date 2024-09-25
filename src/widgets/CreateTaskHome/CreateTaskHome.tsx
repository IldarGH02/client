import { observer } from "mobx-react-lite"
import { Input } from "../../shared/ui/Common/Input"
import { useContext, useState } from "react"
import { Context } from "../.."
import { IoCalendarNumberOutline } from "react-icons/io5";
import "./CreateTaskHome.scss"
import { Calendar } from "../Calendar/Calendar";
import { Button } from "../../shared/ui/Common/Button";

export const CreateTaskHome = observer(() => {
    const { homeStore } = useContext(Context)
    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }

    return (
        <div className="create__task" id="cr">
            <div className="create__task-input" onFocus={homeStore.handleFocusInput} onBlur={homeStore.handleBlurInput}>
                <Input
                    onChange={homeStore.handleChangeInputTask}
                    // onFocus={homeStore.handleFocusInput}
                    // onBlur={homeStore.handleBlurInput}
                    value={homeStore.task}
                    additional_class=''
                    placeholder="Добавить задачу"
                />
                <Button
                    onClick={homeStore.handleClickCreateTask}
                    additional_class={homeStore.focus ? '--show' : ''}
                    text="+"
                />
            </div>
            <div className={`create__task-calendar ${homeStore.focus ? 'active' : ''}`}>
                <div className="task__calendar-veiw">
                    <h4 className="task__calendar-text">Укажите дату</h4>
                    <IoCalendarNumberOutline onClick={handleShow}/>
                </div>
                {
                    show && <Calendar/>
                }
            </div>
        </div>
    )
})