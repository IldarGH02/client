import { observer } from "mobx-react-lite"
import { Input } from "../../shared/ui/Common/Input"
import { useContext, useState } from "react"
import { Context } from "../.."
import { IoCalendarNumberOutline } from "react-icons/io5";
import "./CreateTaskHome.scss"
import { Calendar } from "../Calendar/Calendar";

export const CreateTaskHome = observer(() => {
    const { homeStore } = useContext(Context)
    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }

    return (
        <div className="create__task">
            <Input
                onChange={homeStore.handleChangeInputTask}
                onClick={homeStore.handleChangeClickInput}
                value={homeStore.task}
                additional_class=""
                placeholder="Добавить задачу"
            />
            <div className={`create__task-calendar ${homeStore.click_input ? 'active' : ''}`}>
                <IoCalendarNumberOutline onClick={handleShow}/>
                {
                    show && <Calendar/>
                }
            </div>
        </div>
    )
})