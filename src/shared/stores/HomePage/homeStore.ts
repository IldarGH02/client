import { makeAutoObservable } from "mobx";
import { ChangeEvent, FocusEvent, MouseEvent } from "react";

export class HomeStore {
    task: string = ''
    focus: boolean = false

    constructor() {
        makeAutoObservable(this)
    }


    handleChangeInputTask = (e: ChangeEvent<HTMLInputElement>) => {
        this.task = e.target.value
    }

    handleFocusInput = (e: FocusEvent<HTMLInputElement>) => {
        this.focus = true
        
    }

    handleBlurInput = (e: FocusEvent<HTMLInputElement>) => {
        // if(e.currentTarget.id !== 'cr'){
        //     this.focus = false
        // }
    }

    handleClickCreateTask = (e: TouchEvent | MouseEvent<HTMLButtonElement> ) => {
        
    }
}