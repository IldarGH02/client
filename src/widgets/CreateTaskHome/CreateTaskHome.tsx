import { observer } from "mobx-react-lite"
import { Input } from "../../shared/ui/Common/Input"
import { useContext } from "react"
import { Context } from "../.."

export const CreateTaskHome = observer(() => {
    const { homeStore } = useContext(Context)

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
                <div className="">Тут будет календарь</div>
            </div>
        </div>
    )
})