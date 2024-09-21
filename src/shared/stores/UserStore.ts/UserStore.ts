import { makeAutoObservable } from "mobx";
import { User } from "../../../app/types";

export class UserStore {
    user: User | undefined = undefined;

    constructor(){
        makeAutoObservable(this)
        this.getUser()
    }

    getUser(){
        this.user = window.Telegram.WebApp.initDataUnsafe.user
    }
}