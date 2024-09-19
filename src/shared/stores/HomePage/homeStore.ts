import { makeAutoObservable } from "mobx";
import { ChangeEvent, MouseEvent } from "react";

export class HomeStore {
    task: string = ''
    click_input: boolean = false

    constructor() {
        makeAutoObservable(this)
    }


    handleChangeInputTask = (e: ChangeEvent<HTMLInputElement>) => {
        this.task = e.target.value
    }

    handleChangeClickInput = () => {
        if(this.click_input) {
            this.click_input = false
        } else {
            this.click_input = true
        }
    }
}