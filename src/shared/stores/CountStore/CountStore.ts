import { makeAutoObservable } from "mobx";

export class CountStore {
    all_count: string = '0'
    today_count: string = '0'
    
    constructor(){
        makeAutoObservable(this)
    }

    setAllCount(count: string){
        this.all_count = count
    }
}